---
title: Calculate working time between two dates in C# (including SLA working hours)
date: 03/05/2017
path: /blog/my-first-post
---

Often we need to calculate the time between two dates, but <b>only take into account working hours</b>. Working hours usually fall somewhere between 09:00 - 17:00, Monday - Friday, and are defined in CRM via Entitlements and SLAs. There's no way to achieve this out of the box, therefore custom code must be written for this calculation within a plugin or a workflow.

<p>
The code I provide in this article is one of many ways this can be achieved. My approach here is to abstract days, minutes and time duration programatically and to then provide a static <b>Calendar</b> class to deal with CRM-specific logic.
</p>

<p>
Minute's are straightforward. You'll see here I simply conceptualise them as an object that has an <i>Index</i> property to represent which minute of the day the minute is. For example a minute with <b>Index</b> is 00:10.
</p>

```cs
public sealed class Minute
{
  public int Index;

  /// <summary>
  /// Default constructor for <see cref="Minute"/>.
  /// </summary>
  /// <param name="index">The minute's offset from midnight in minutes
  /// e.g. a <see cref="Index"/> of 60 would represent the minute
  /// at 01:00am for a <see cref="Day"/>.</param>
  public Minute(int index)
  {
    Index = index;
  }
}
```

<p>
One level higher, I outline a day, which has a list of minutes (there are 1440 minutes in a day):
</p>

```cs
public sealed class Day
{
  public DayOfWeek DayOfWeek;
  public int DayOfMonth;
  public int Month;
  public int Year;
  public List<Minute> Minutes;
  public TimeSpan WorkingHours;

  public Day(DayOfWeek dayOfWeek)
  {
    DayOfWeek = dayOfWeek;
    Minutes = new List<Minute>();
  }

  public Day(DayOfWeek dayOfWeek, int start = 0, int end = 1440)
  {
    DayOfWeek = dayOfWeek;
    SetMinutes (start, end);
  }

  public Day(DateTime dateTime, int start = 0, int end = 1440)
  {
    DayOfWeek = dateTime.DayOfWeek;
    DayOfMonth = dateTime.Day;
    Month = dateTime.Month;
    Year = dateTime.Year;

    SetMinutes (start, end);
  }

  public Day(DayOfWeek dayOfWeek, int day, int month, int year)
  {
    DayOfWeek = dayOfWeek;
    DayOfMonth = day;
    Month = month;
    Year = year;
    SetMinutes();
  }

  /// <summary>
  /// Initialises the minutes in a day, either using an offset for start and end
  /// or setting all 1440 minutes (default).
  /// </summary>
  /// <param name="start">Offset from midnight in minutes.</param>
  /// <param name="end">Offset from midnight in minutes.</param>
  void SetMinutes(int start = 0, int end = 1440)
  {
    var minutes = new List<Minute>(1440);
    for (int i = start; i < end; i++) minutes.Add(new Minute(i));
    Minutes = minutes;
  }

  public bool IsSameDate(DateTime dt)
  {
    bool isSameDate = false;
    DateTime thisDay = new DateTime(this.Year, this.Month, this.DayOfMonth);

    if (dt != null) isSameDate = dt.Date == thisDay.Date;

    return isSameDate;
  }
}
```

<p>
Then we have a duration, which is a collection of days between a start and an end:
</p>

```cs
public sealed class Duration
{
  public List<Day> Days;
  public DateTime Start;
  public DateTime End;

  public Duration(List<Day> days)
  {
    Days = days;
  }

  public Duration(DateTime start, DateTime end)
  {
    Start = start;
    End = end;
    SetDays();
  }

  /// <summary>
  /// Get sum total of all minutes of all days within the <see cref="Duration"/>.
  /// </summary>
  /// <returns></returns>
  public int GetTotalMinutes()
  {
    int count = 0;

    foreach (var day in Days) count += day.Minutes.Count;

    return count;
  }

  /// <summary>
  /// Initialises <see cref="Days"/>.
  /// Begins with <see cref="Start"/>, ends with <see cref="End"/> and initialises
  /// all days between the two.
  /// </summary>
  void SetDays()
  {
    var daysInBetween = (End - Start).Days;
    Days = new List<Day>(daysInBetween);

    var dayOfWeek = Convert.ToInt16(Start.DayOfWeek);
    Days.Add(new Day(Start, Convert.ToInt16(Start.TimeOfDay.TotalMinutes)));

    for (int i = 0; i < daysInBetween; i++)
    {
      var nextDate = Start.AddDays(i + 1);

      if (nextDate.Date != End.Date)
        Days
          .Add(new Day(nextDate.DayOfWeek,
            nextDate.Day,
            nextDate.Month,
            nextDate.Year));
    }

    Days.Add(new Day(End, 0, Convert.ToInt16(End.TimeOfDay.TotalMinutes)));
  }

  /// <summary>
  /// Sets <see cref="Start"/> equal to the smaller value of <see cref="Start"/>
  /// and <see cref="End"/>.
  /// </summary>
  /// <param name="inverted">Outputs true if <see cref="Start"/> and <see cref="End"/>
  /// has to be swapped, otherwise false.</param>
  void SetStartDate(out bool inverted)
  {
    inverted = false;

    if (Start > End)
    {
      Helpers.Common.Swap(ref Start, ref End);
      inverted = true;
    }
  }

  /// <summary>
  /// Removes all minutes from the <see cref="Duration"/> which are not included
  /// in <paramref name="businessHours"/> parameter
  /// i.e. are not considered 'working' minutes.
  /// </summary>
  /// <param name="businessHours">Representation of minutes in days which are
  /// working minutes e.g. 09:00 - 17:00.</param>
  public void RemoveNonWorkingMinutes(List<Day> businessHours)
  {
    var startMinutes = Start.TimeOfDay.TotalMinutes;
    var endMinutes = End.TimeOfDay.TotalMinutes;

    if (Start.Date == End.Date && Days.Count == 2) Days.RemoveAt(1);

    foreach (var day in Days)
    {
      var businessDay =
        businessHours.Where(x => x.DayOfWeek == day.DayOfWeek).FirstOrDefault();
      var minutesToRemove = new List<Minute>();

      foreach (var minute in day.Minutes)
      {
        if (businessDay.Minutes.Where(m => m.Index == minute.Index).Count() <= 0
        ) minutesToRemove.Add(minute);

        if (day.IsSameDate(Start))
          if (minute.Index < startMinutes)
            minutesToRemove.Add(minute);
          else if (day.IsSameDate(End))
            if (minute.Index >= endMinutes) minutesToRemove.Add(minute);
      }

      foreach (var minuteToRemove in minutesToRemove)
      try
      {
        day.Minutes.Remove (minuteToRemove);
      }
      catch
      {
        continue;
      } // Lazy. Expecting IndexOutOfBounds..
    }
  }
}
```

<p>
Finally we have a static calendar class which handles CRM-specific entitlement and SLA logic. <u>This currently only works for retrieving an Entitlement from a <b>Case.</b></u> Attribute strings can be changed according to your requirement/the entity you're working with.
</p>

```cs
internal static class Calendar
{
  /// <summary>
  /// Builds a model which represents the valid working minutes in a week as dictated 
  /// by an entitlement
  /// associated with <paramref name="incident"/>.
  /// </summary>
  /// <param name="service">Service required to query CRM metadata.</param>
  /// <param name="incident">Incident (case) to retrieve the entitlement SLA from.</param>
  /// <returns>Returns a model which represents the valid working minutes in a week as dictated by
  /// the case's associated entitlement.</returns>
  internal static List<Day>
  GetWorkingScheduleFromCaseSLA(IOrganizationService service, Entity incident)
  {
    var duration = 0;
    var offset = 0;
    var workingDays = new List<DayOfWeek>();

    // Get entitlement
    if (incident.Attributes.Contains("entitlementid"))
    {
      try
      {
        var entitlementId =
          incident.GetAttributeValue<EntityReference>("entitlementid").Id;
        var entitlement =
          service
            .Retrieve("entitlement", entitlementId, new ColumnSet("slaid"));

        // Get SLA
        var SLAId = entitlement.GetAttributeValue<EntityReference>("slaid").Id;
        var SLA = service.Retrieve("sla", SLAId, new ColumnSet(true));

        var calendarId =
          SLA.GetAttributeValue<EntityReference>("businesshoursid").Id;
        var calendar =
          service.Retrieve("calendar", calendarId, new ColumnSet(true));
        var pattern =
          calendar
            .GetAttributeValue<EntityCollection>("calendarrules")
            .Entities[0]
            .GetAttributeValue<string>("pattern");

        var innerCalendarId =
          calendar
            .GetAttributeValue<EntityCollection>("calendarrules")
            .Entities[0]
            .GetAttributeValue<EntityReference>("innercalendarid")
            .Id;
        var innerCalendar =
          service.Retrieve("calendar", innerCalendarId, new ColumnSet(true));

        duration =
          innerCalendar
            .GetAttributeValue<EntityCollection>("calendarrules")
            .Entities[0]
            .GetAttributeValue<int>("duration");
        offset =
          innerCalendar
            .GetAttributeValue<EntityCollection>("calendarrules")
            .Entities[0]
            .GetAttributeValue<int>("offset");
        workingDays = GetPatternDays(pattern);
      }
      catch (NullReferenceException n)
      {
      }
      catch (ArgumentNullException a)
      {
      }
    }
    else
    // If no entitlement, default to 08:30 - 17:30 Monday to Friday
    {
      duration = 540;
      offset = 510;
      workingDays =
        new List<DayOfWeek>()
        {
          DayOfWeek.Monday,
          DayOfWeek.Tuesday,
          DayOfWeek.Wednesday,
          DayOfWeek.Thursday,
          DayOfWeek.Friday
        };
    }

    List<Day> workingHours =
      BuildWorkingHoursFromPattern(workingDays, offset, offset + duration);

    return workingHours;
  }

  /// <summary>
  /// Retrieves an SLA pattern from a CRM calendar.
  /// </summary>
  /// <param name="service">Service required to query CRM metadata.</param>
  /// <param name="calendar">Calendar contained within a CRM SLA.</param>
  /// <returns>Returns an SLA pattern. Example format returned from CRM: 
  /// FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,TH,FR</returns>
  internal static string
  GetPattern(IOrganizationService service, Entity calendar)
  {
    var calendarRules =
      calendar != null && calendar.Attributes.Contains("calendarrules")
        ? calendar.GetAttributeValue<EntityCollection>("calendarrules")
        : null;

    var pattern =
      calendarRules != null
        ? calendarRules.Entities[0].GetAttributeValue<string>("pattern")
        : string.Empty;

    return pattern;
  }

  /// <summary>
  /// Gets the working days defined by a CRM SLA pattern.
  /// </summary>
  /// <param name="pattern">Pattern as defined within a CRM SLA calendar.</param>
  /// <returns>Returns the working days defined by a CRM SLA pattern e.g. MO, TU will return
  /// <see cref="DayOfWeek.Monday"/> and <see cref="DayOfWeek.Tuesday"/>.</returns>
  internal static List<DayOfWeek> GetPatternDays(string pattern)
  {
    var days = new List<DayOfWeek>();

    var split =
      Array
        .FindAll(pattern.Split(';'), s => s.Contains("BYDAY"))
        .FirstOrDefault();
    var index = split.IndexOf("BYDAY=");
    var daysStr = split.Remove(index, 6).Split(',');

    if (daysStr.Count() > 0)
    {
      var dayMappings = BuildDayMapping();

      foreach (var day in daysStr)
      {
        if (dayMappings.ContainsKey(day)) days.Add(dayMappings[day]);
      }
    }

    return days.Count > 0 ? days : null;
  }

  /// <summary>
  /// Creates a <see cref="List{T}" of <see cref="Day"/> objects each representing a working day.
  /// A working day is represented by containing 
  /// <see cref="Minute"/> objects, where <see cref="Minute.Index"/>
  /// is a minute's offset into the day. If no minute exists at a given index, then that minute in the day is
  /// not a working minute.
  /// </summary>
  /// <param name="days"></param>
  /// <param name="start">Start of the working day as a minute offset from midnight.</param>
  /// <param name="end">End of the working day as a minute offset from midnight.</param>
  /// <returns>Returns a <see cref="List{T}"/> of <see cref="Day"/> objects representing 
  /// a working week."</returns>
  internal static List<Day>
  BuildWorkingHoursFromPattern(List<DayOfWeek> days, int start, int end)
  {
    var workingDays = new List<Day>(7);
    var weekDays = BuildWeekDays();

    foreach (var day in days) workingDays.Add(new Day(day, start, end));

    foreach (var weekDay in weekDays)
    if (!days.Contains(weekDay))
      // Add an empty Day with no minutes.
      workingDays.Add(new Day(weekDay));

    return workingDays;
  }

  /// <summary>
  /// Creates a new list of <see cref="DayOfWeek"/> to represent a 7 day week.
  /// </summary>
  /// <returns>Returns a new list of <see cref="DayOfWeek"/></returns>
  static List<DayOfWeek> BuildWeekDays()
  {
    return new List<DayOfWeek>()
    {
      DayOfWeek.Monday,
      DayOfWeek.Tuesday,
      DayOfWeek.Wednesday,
      DayOfWeek.Thursday,
      DayOfWeek.Friday,
      DayOfWeek.Saturday,
      DayOfWeek.Sunday
    };
  }

  /// <summary>
  /// Creates a mapping between CRM calendar representations for days of the week 
  /// e.g. MO, TU, to their
  /// respective <see cref="DayOfWeek"/>.
  /// </summary>
  /// <returns>Returns mapped days of the week.</returns>
  static Dictionary<string, DayOfWeek> BuildDayMapping()
  {
    Dictionary<string, DayOfWeek> dayMapping =
      new Dictionary<string, DayOfWeek>(7);
    dayMapping.Add("MO", DayOfWeek.Monday);
    dayMapping.Add("TU", DayOfWeek.Tuesday);
    dayMapping.Add("WE", DayOfWeek.Wednesday);
    dayMapping.Add("TH", DayOfWeek.Thursday);
    dayMapping.Add("FR", DayOfWeek.Friday);
    dayMapping.Add("SA", DayOfWeek.Saturday);
    dayMapping.Add("SU", DayOfWeek.Sunday);

    return dayMapping;
  }
}
```

<h3>How is this used?</h3>
Firstly, the 4 classes from above are copied into a project.

<p>
Next, in the plugin's execute method, two DateTimes are retrieved, along with the context entity. In this example I'm using a Case entity and my Calendar class:
</p>

```cs
var createdOn = incident.GetAttributeValue<DateTime>("createdon");
var today = DateTime.Now;

// Create model for valid working hours as defined by the case's entitlement SLA
var workingHours = Calendar.GetWorkingScheduleFromCaseSLA(service, incident);
```

<p>
We now have a list of days representing a model of working hours defined in the Case's Entitlement stored in the <b>workingHours</b> variable.
</p>

<p>
We can now create a duration object, which models the time between our two DateTimes:
</p>

```cs
// Create model of days between when the incident was created and now
var timeBetween = new Duration(createdOn, today);
```

<p>
Then we remove time which we're not interested in (it falls outside of valid working hours):
</p>

```cs
// Remove time from the model which falls outside of valid working hours (as determined by SLA)
timeBetween.RemoveNonWorkingMinutes(workingHours);
```

<p>
And finally call <b>GetTotalMinutes()</b> and calculate the time in minutes between our two DateTimes without the invalid time:
</p>

```cs
var responseTime = Math.Round(TimeSpan.FromMinutes(timeBetween.GetTotalMinutes()).TotalHours, 2);
```

<p>
And that's all. We now have the valid working time (in minutes) between the two DateTimes stored in the <b>responseTime</b> variable.
</p>

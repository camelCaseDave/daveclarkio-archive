import React from "react";
import styled from "@emotion/styled";

const DotContainer = styled.span`
  margin-left: 0.25em;
  margin-right: 0.25em;
`;

const DotSeparator = () => <DotContainer>&middot;</DotContainer>;

export default DotSeparator;

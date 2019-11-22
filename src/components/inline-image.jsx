import styled from "@emotion/styled";

const InlineImage = styled.img`
  background-image: url(${props => props.url});
  background-position: 50% 50%;
  background-size: cover;
  background-origin: border-box;
  height: 100%;
  width: 100%;
  display: block;
`;

export default InlineImage;

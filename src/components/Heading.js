import styled from "@emotion/styled";
import {css} from "@emotion/react";

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-block: 0;
  ${({ theme, color, ...styles }) => css`
    color: ${color ? theme.colors[color] : theme.colors.header};
    ${{ ...styles }}
  `}
`;

export default Heading;

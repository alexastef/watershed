import styled from "@emotion/styled";
import { css } from "@emotion/react";

const sizes = {
    md: '40px'
};

const Button = styled.button(
    {
       transition: 'all 0.2s linear',
       height: '40px',
       border: 'none',
       fontWeight: 600,
       color: 'white',
       padding: '11px 14px',
       fontSize: '17px'
    },
    ({ theme, size }) => css`
      background-color: ${theme.colors.cobaltCore};
      height: ${sizes[size]};
      &:hover {
        cursor: pointer;
        transform: scale(0.97);
        background-color: ${theme.colors.cobaltDeep};
      }
    `
);


export default Button;

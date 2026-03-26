import styled, { css } from "styled-components";
import { StyledRegularText } from "../RegularText/index.style";

interface StyledButtonProps {
    bigText?: boolean;
}

const StyledButton = styled.button.attrs({type: "button"})<StyledButtonProps>`
    background: ${props => props.theme.colors.primary};
    color: white;
    font-family: ${props => props.theme.fonts.family}

    ${StyledRegularText} {
        color: black;
    }

    // Se bigText è true, allora applichiamo questo stile
    ${props => props.bigText && css`
        ${StyledRegularText} {
            font-size: 64px;
        }
    `}
`;

export { StyledButton };
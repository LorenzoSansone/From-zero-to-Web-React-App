import styled from "styled-components";
import Button from "./components/Button";
import { StyledRegularText } from "./components/RegularText/index.style";
//
const PageContainer = styled.div`
width: 200px;
height: 200px;
background: black;
`

const BlueButton = styled(Button)`
background: blue;
`;

const BigBlueButton = styled(BlueButton)`
${StyledRegularText} {
    font-size: 32px;
}
`

export { PageContainer , BlueButton, BigBlueButton};
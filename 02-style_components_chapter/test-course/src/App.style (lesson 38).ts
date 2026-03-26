import styled from "styled-components";
import Button from "./components/Button";
import { StyledRegularText } from "./components/RegularText/index.style";
//
const PageContainer = styled.div`
width: 200px;
height: 200px;
background: black;
`
const BlueButton = styled(Button)<{ color: string }>`
background: ${props => props.color};
`;


export { PageContainer, BlueButton };
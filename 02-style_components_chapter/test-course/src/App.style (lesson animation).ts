import styled from "styled-components";
import Button from "./components/Button";
import { StyledRegularText } from "./components/RegularText/index.style";
import { keyframes } from "styled-components";
//
const PageContainer = styled.div`
width: 200px;
height: 200px;
background: black;
`
//from animista
const RotatingKeyframe = keyframes`
0% {
            transform: rotate(0);
  }
  100% {
            transform: rotate(360deg);
  }
`;

const RotatingSquare = styled.div`
width: 100px;
height: 100px;
background: red;
animation: ${RotatingKeyframe} 1s linear infinite;`

export { PageContainer, RotatingSquare};
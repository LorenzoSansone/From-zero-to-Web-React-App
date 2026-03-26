import { FunctionComponent } from "react";
import { StyledRegularText } from "./index.style";

interface RegularTextProps {
    children: React.ReactNode;
}

const RegularText: FunctionComponent<RegularTextProps> = ({ children }) => {
    return <StyledRegularText>{children}</StyledRegularText>
}

export default RegularText;
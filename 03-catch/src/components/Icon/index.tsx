import { FunctionComponent } from "react";
import { StyledIcon } from "./index.style"


export type IconType = "heart" | "star" | "x"

export interface IconProps {
    color?: String;
    size?: number;
    type: IconType;
}


const Icon: FunctionComponent<IconProps> = ({size, type, ...rest}) => {
    switch(type) {
        case "heart":
            return (<StyledIcon></StyledIcon>);
        case "star":
            return (<StyledIcon></StyledIcon>);
        case "x":
            return <StyledIcon></StyledIcon>
    }

};

export default Icon;
import { FunctionComponent } from "react";
import {StyledButton} from "./index.style";
import { VariantType } from "ui/theme/theme";
import {IconProps} from "components/Icon";
import Icon from "components/Icon";
interface ButtonProps {
    icon?: IconProps;
    variant?: VariantType;

}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<Props> = ({icon, variant = "like", ...rest}) => {
    return <StyledButton variant = {variant} {...rest}>
        {icon && <Icon size= {40} {...icon}/>}
    </StyledButton>
}

export default Button;
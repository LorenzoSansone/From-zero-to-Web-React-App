import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { StyledButton } from "./index.style";

interface ButtonProps {
    bigText?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick: () => void;
}

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<ButtonProps> = ({ className, children, bigText, onClick }) => {
  return <StyledButton className={className} bigText={bigText} onClick={onClick}> {children}</StyledButton>;
}

export default Button;
import { FunctionComponent } from "react";
import {StyledCard, Footer, DataContainer, Name, ButtonContainer} from "./index.style";
import Button from "components/Button";
import {Cat} from "app-types/cat";
import { Action } from "app-types/Action";

interface CardProps {
    cat: Cat;
    onAction: (action: Action) => void;

}

type Props = CardProps & React.HtmlHTMLAttributes<HTMLDivElement>;

const Card: FunctionComponent<Props> = ({cat, onAction, ...rest}) => {
    
    return <StyledCard $catId={cat.id} {...rest}>
        <Footer>
            <DataContainer>
                <Name>{cat.name} {cat.age}</Name>
            </DataContainer>
            <ButtonContainer>
                <Button icon = {{type: "x"}} variant ={"ignore"} onClick={() => onAction(Action.Ignore)}/>
                <Button icon = {{type: "star"}} variant ={"superLike"} onClick={() => onAction(Action.SuperLike)}/>
                <Button icon = {{type: "heart"}} variant ={"like"} onClick={() => onAction(Action.Like)}/>
            </ButtonContainer>

        </Footer>

    </StyledCard>
}

export default Card;
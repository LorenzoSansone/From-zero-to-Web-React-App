import { FunctionComponent, useState } from "react";
import {StyledUI} from "./index.style";
import Card from "components/Card";
import { getRandomCat } from "utils/random";
import {Cat} from "app-types/cat"
import {Action} from "app-types/action";

const UI: FunctionComponent = () => {
    const cat = getRandomCat();

    const [availableCats, setAvailableCats] = useState<Cat[]>(
        Array.from(Array(5).keys()).map(() => getRandomCat()));

    const [ignored, setIgnored] = useState<Cat[]>([]);
    const [superLiked, setSuperLiked] = useState<Cat[]>([]);
    const [liked, setLiked] = useState<Cat[]>([]);

    
    const handleAction = (cat:Cat, action: Action) => {
        setAvailableCats(availableCats => availableCats.filter(cat => cat.id != cat.id));
        setAvailableCats(availableCats => [...availableCats, getRandomCat()]);
        switch(action){
            case Action.Ignore:
                setIgnored(ignored => [...ignored, cat]);
                break;
            case Action.Like:
                setLiked(liked => [...liked, cat]);
                break;
            case Action.SuperLike:
                setSuperLiked(superLiked => [...superLiked, cat])
                break;
        }
    
    };


    return (
    <StyledUI>
        <Card cat ={cat} onAction={(action) => handleAction(cat, action)} />
    </StyledUI>
    );
}

export default UI;
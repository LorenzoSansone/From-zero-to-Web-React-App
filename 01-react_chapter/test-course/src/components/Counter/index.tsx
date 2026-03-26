import { FunctionComponent, useContext, useEffect, useState } from "react";
import { TextColorContext } from "App";


interface CounterProps {
    number: number;
}

const Counter: FunctionComponent<CounterProps> = ({ number }) => {
    console.log('Counter rerender');
    
    const textColor = useContext(TextColorContext);

    const [color, setColor] = useState<string>("#ffffff");

    const getRandomColor = ():string => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    
    useEffect( () => {
        setColor(getRandomColor());
    }, [number]) //Rerender solo se cambia number

    return <span style={{ background: color, fontSize:32, color: textColor }}>{number}</span>

}

export default Counter;
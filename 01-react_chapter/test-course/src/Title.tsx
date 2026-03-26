//Componenti vengono definiti con la lettere iniziale maiuscola, altrimenti React lo interpreta come un elemento HTML

import { FunctionComponent } from "react";

interface TitleProps {
    enabled?: boolean;
    name: string;
}

//L'abbiamo usato in index.tsx come componente.
const Title: FunctionComponent<TitleProps> = ( props:TitleProps ) => {

    return <div>
        {props.enabled &&<h1>Title Component: {props.name}</h1>}
        </div>;
}

export default Title;
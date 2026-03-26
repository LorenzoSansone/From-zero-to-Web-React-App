import { TextColorContext } from "App";
import { FunctionComponent, use, useContext } from "react";

const Paragraph:FunctionComponent = () => {
    const textColor = useContext(TextColorContext);

    return <p style={{ color: textColor }}>
        Edit <code>src/App.tsx</code> and save to reload.
    </p>
}

export default Paragraph;
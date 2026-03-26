import { FunctionComponent } from "react";
import Paragraph from "../Paragraph";

import logo from '../logo.svg';
import '../../App.css';

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ( props:HeaderProps) => {
    return <header className="App-header">

      {props.children}
      <Paragraph />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
}

export default Header;
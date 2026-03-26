type Position = "top" | "bottom" | "left" | "right"; //literal type: può essere solo uno di questi valori
type First10 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; //può essere solo uno di questi valori
type Heigth = "-150" | "150 - -170" | 100;

//const position: Position = "Ciao"; -> errore
const position: Position = "top"; //ok
const number: First10 = 5; //ok

interface Square {
    position: Position;
}

const square: Square = {
    position: "top"
}

export type {Position};
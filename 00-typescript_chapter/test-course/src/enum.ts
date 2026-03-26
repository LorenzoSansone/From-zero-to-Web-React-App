//Modo più bello di creare type literal

type PositionLiteral = "top" | "bottom" | "left" | "right"; //literal type: può essere solo uno di questi valori

enum Position{
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right"
}

interface Square {
    position: Position; // enum può essere usato come tipo
}

const getNumberFromPosition = (position: Position): number => {
    switch(position){
        case Position.Top:
            return 1;
        case Position.Bottom:
            return -1;   
        case Position.Left:
            return 2;
        case Position.Right:
            return -2;
    }
}

const position: Position = Position.Top; //ok

type StrinPosition = `${Position}`; //template literal type: crea un nuovo tipo a partire da un enum

const stringPosition: StrinPosition = "top"; //ok
//const stringPosition1: StrinPosition = "ciao"; //error

enum Status {
    NotActive = 0,
    Active = 1,
    Pauesed = 2,
    Disabled = 3
}
const status_obj: Status = Status.Active;
//if (status_obj != Status.Disabled) { // posso usare l'enum anche per fare dei confronti
//    console.log("User is active");
//}

export{Position, getNumberFromPosition, Status};
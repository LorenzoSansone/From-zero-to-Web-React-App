//const names: string[] = ["Ignor", "Robertp", "Giovanni"]; -> alternativa con array generico
const names: Array<string> = ["Ignor", "Robertp", "Giovanni"];

// T è un tipo generico, che viene specificato al momento dell'utilizzo della funzione
const chooseFirstElement = <T>(list: T[]): T => {
    return list[0];
}

console.log(chooseFirstElement(names));
console.log(chooseFirstElement<string>(names)); //Alternativa con specifica del tipo, non è necessario se il tipo può essere inferito

const numbers = [1,2,3,4];

console.log(chooseFirstElement(numbers)); // capisce che T è number, perché numbers è un array di number

interface Box<T> {
    content: T;
}

type NumberBox = Box<number>;

const numberBox: NumberBox = {
    content: 10
}

const arrayNumberBox: Box<Array<number>> = {
    content: [1, 2, 3, 4]
};

interface BoxComplex<C, E>{
    content: C;
    external: E;
}

type NumberStringBox = BoxComplex<number, string>;

const numberStringBox: NumberStringBox = {
    content: 10,
    external: "Ciao"
}

export {names, chooseFirstElement};
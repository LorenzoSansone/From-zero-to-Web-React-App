const HelloWorld = () => {
    console.log("Hello World");
}

const sum = (a: number, b?: number): number => { // (...): number -> specifica il tipo di ritorno della funzione
    return b? a + b: a;
}

console.log(sum(2));

//Creazione di un interface con una funziona
interface ComponentProps {
    name: string;
    sum: (a: number, b: number) => number; //funzione che prende numeri e restituisce un numero
}

export {HelloWorld};
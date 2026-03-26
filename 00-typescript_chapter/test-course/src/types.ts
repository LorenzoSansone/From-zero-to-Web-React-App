const a: string = "ciao";

interface SimpleCar {
    hp: number | string; //hp può essere un numero o una stringa (es: "800hp")
    width?: number;
    height?: number;
    length?: number;
}

interface PickUp extends SimpleCar {
    liters: number;
}

interface RacingCar extends SimpleCar {
    maxSpeed: number;
}

type Car = PickUp | RacingCar; //UNION: unione di tipi. Può essere un PickUp o una RacingCar ma non tutte e due

const Ferrari: Car = {
    hp: 800,
    maxSpeed: 400
}

type Car1 = PickUp & RacingCar; //INTERSECTION:intersezione di tipi. Deve essere sia un PickUp che una RacingCar

const Ferrari1: Car1 = {
    hp: 800,
    maxSpeed: 400,
    liters: 100
}



export {a};



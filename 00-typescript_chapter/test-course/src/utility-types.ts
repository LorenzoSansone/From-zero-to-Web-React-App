//Omit -> Contesto: devo creare un nuovo tipo User senza la proprietà id, perché nel db l'id viene generato automaticamente

interface User {
    id: number;
    name?: string;
    //readonly surname?: string; readonly -> non posso modificare la proprietà surname dopo averla assegnata, ma posso assegnarla una volta sola
    surname?: string;
    age: number;
    enabled: boolean;
}

type UserWithoutId = Omit<User, "id">; //crea un nuovo tipo User senza la proprietà id

const userWithoutId: UserWithoutId = {
    name: "Igor",
    surname: "Ciao",
    age: 24,
    enabled: true
}

const user: User = {
    id: 1,
    name: "Igor",
    surname: "Ciao",
    age: 24,
    enabled: true
}


// Partial
type PartialUser = Partial<User>; //crea un nuovo tipo User con tutte le proprietà opzionali

const partialUser: PartialUser = {
    name: "Igor"
}

//Required
type RequiredUser = Required<User>; //crea un nuovo tipo User con tutte le proprietà obbligatorie

const requiredUser: RequiredUser = {
    id: 1,
    name: "Igor",
    surname: "Ciao",
    age: 24,
    enabled: true
}

//Readonly
type ReadonlyUser = Readonly<User>; //crea un nuovo tipo User con tutte le proprietà readonly

const readonlyUser: ReadonlyUser = {
    id: 1,
    name: "Igor",
    surname: "Ciao",
    age: 24,
    enabled: true
};

//readonlyUser.name = "Robert"; //errore, non posso modificare una proprietà readonly

export{user}
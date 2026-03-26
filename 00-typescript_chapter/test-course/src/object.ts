const a: string = "a";

interface SimpleUserOptional {
    person?: {
        name: string;
    }
}


//1° metodo: usato per i tipi di base
interface SimpleUser {
    name?: string; //name è facoltativo
    email: string;
}

//Con questa dichiarazione viene fatta un merge
interface SimpleUser{
    surname: string;
}

interface User extends SimpleUser{
    age: number;
}

//2° metodo = usato per alias
//type SimpleUser {
//    name: string;
//    email: string;
//}

//Semplice dichiarazione con type
//type User = SimpleUser;



const obj: SimpleUser = {
    name: "Ignor",
    email: "ciao@google.com",
    surname: "Ciao"
}

const obj1: User = {
    name: "Ignor",
    email: "ciao@google.com",
    surname: "Ciao",
    age: 1

}
const obj2: SimpleUserOptional = {

}

console.log(obj.name);

console.log(obj2.person?.name); //se person è undefined, non da errore, ma restituisce undefined

export {a};
export type {SimpleUser};

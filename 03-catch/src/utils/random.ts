import { faker } from "@faker-js/faker";
import {Cat} from "app-types/cat";

const getRandomeAge = () => Math.floor(Math.random() * 18) + 1;

const getRandomCat = (): Cat => ({
    id: faker.commerce.isbn(10),
    name: faker.person.firstName(),
    age: getRandomeAge(),
}); 

export {getRandomCat};
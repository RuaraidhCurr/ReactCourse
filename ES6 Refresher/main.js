// CONST LET

let name1 = "John";

const name2 = "Jack";

let name;

const person = {
  name: "Jhon",
  age: "33"
};

person.name = "Jack";

const nums = [1, 2, 3, 4];

nums.push(5, 6);

// ARROW FUNCTIONS

// function sayHello(){
//     console.log("hello")
// }

const sayHello1 = () => {
  console.log("Hello Brad");
};
sayHello1();

const sayHello2 = (name, greet) => console.log(greet + " " + name); // Use brackets when calling in more than one variable 

const sayHello3 = name => console.log(`Hello ${name}`); // Uses back ticks when concatenating variables

sayHello2("Brad", "Hello");

sayHello3("Brad");

// FOREACH
const fruits = ["apples", "oranges", "grapes"];

fruits.forEach((fruit, index) => console.log(fruit, index));

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);

// FILTER

const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Sharon" }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD

const arr = [1,2,3];
const arrInarr = [arr, 4];
const arr2 = [...arr, 4];
console.log(arrInarr);
console.log(arr2);

const arr3 = [...arr.filter(num => num !== 2)]; // Uses to remove second number in first array
console.log(arr3)

const personOne = {
  name: "Brad",
  age: 36
}

const personTwo = {
  ...personOne,
  email: "brad@gmail.com"
}
console.log(personTwo);

//  DECONSTRUCTION

const profile = {
  pName: "John Doe",
  pAddress: {
    street: "40 Main st",
    city: "Boston"
  },
  pHobbies: ["movies", "music"]
}

const { pName, pAddress, pHobbies } = profile
const { street, city } = profile.pAddress

console.log(pName, city, pHobbies[0])

// CLASSES

class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  greet(ornj){
    return `Hello, my name is ${this.name} and I am ${this.age} wagwan ${ornj}`;
  }

}

const person1 = new Person("John", 33);
const person2 = new Person("Sarah", 28);

console.log(person1.greet("Ruaraidh"))

// SUBCLASSES

class Customer extends Person{
  constructor(name, age, balance){
    super(name, age);
    this.balance = balance;
  }

  info(){
    return `${this.name} owes £${this.balance}.00`;
  }

}

const customer1 = new Customer("Kevin", 32, 300);
console.log(customer1, customer1.info())

// MODULES

// file 1 (file1.js)
    // export const nameFile1 = "jeff";
    // export const nums = [1,2,3];
    // export default Person;


//  file 2 (file2.js)
    // import {nameFile1, nums} from "./file1";
    // import Person from ".file1"

    // console.log(nameFile1, nums)
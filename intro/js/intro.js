
function sum(a , b){
    return a + b;
}

let res = sum(1,2);
console.log(res);

const fsum = sum;
res = fsum(5 , 6);
console.log(res);

//Funcion orde Superior
function operation(fn, a, b){
    console.log("Se hace algo");
    console.log(fn(a,b));
}

operation(sum, 10, 20);

// Arrow function
operation((a,b) => a * b ,5,5);
operation((a, b) => {
    const c = a + b;
    return c * 2
}, 1, 2);

//Foreach
const names = ["Hector","Juan","Pablo","Diego"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names);
names.sort();
console.log(names);

// Map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);
console.log(names);

// Reduce
const numbers = [5,4,7,1,10];
const total = numbers.reduce((ac, number) => ac + number,0);

console.log(total);

// Programación ORIENTADA A OBJETOS
//clase
// class Drink {

//     constructor(name){
//         this.name = name;
//     }

//     info(){
//         return `La bebida es: ${this.name}`;
//     }
// }

// // Funcional
// function Drink2(name){
//     this.name = name;
//     this.info = () => {
//         return `La bebida es: ${this.name}`;
//     }
// }

// const drink = new Drink("Agua");
// console.log(drink.info());

// const drink2 = new Drink2("Agua");
// console.log(drink2.info());

// //Herencia
// class Beer extends Drink
// {
//     constructor(name, alcohol){
//         super(name);
//         this.alcohol = alcohol;
//     }
    
//     info(){
//         return super.info() + " " + this.alcohol;
//     }
// }

// const beer = new Beer("Erdinger", 8.5);
// console.log(beer.info());

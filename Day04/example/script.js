// Declaring variables
let x = 'string 1';

x = 'A new string';

const y = 'string 2';

// Conditionals

if ( x == y ){
    console.log('X equals y');
}else{
    console.log('X is not equal to y');
}

console.log('Typecasting');

// Type of Operators
// == Never use
// === use
// <=
// >=
// != Don't use
// !== (Use)

// Tenary
let number = 2;
let string = '2';

console.log("Tenary");
const ternary = number === string ? true:false;
console.log(ternary);

// Switch
console.log("switch statement");

const car = "Very cool Ford Focus";

let foopert = 'car';

// switch(car){
//     case 'Ford F250': 
//         return false;
//     case 'Honda Accord':
//         return true;
//     case 'Kia Rio':
//         return false;
//     default:
//         return foopert;
// }

// Declaring a function, implicit though
// function aFunction(paramater){
//     console.log('Function A');
//     return;
// }

// // For loop
// console.log("For loop")
// for ( let i = 0; i <= 5; i++ ){
//     console.log(i);
// }

// // While loop
// while ( one === two )
// {
//     console.log('true');
// }

let two = 2;

// Objects
let myobject = { 
    key1: 'value',
    key2: two,
    sum: this.one + this.two,
    mymethod: () => {
        let sum = myobject.one + myobject.two;
    }
 };

 myobject.mymethod();
 console.log(myobject.sum);

 // Arrays 
 let array = ['red', 'blue', 'yellow'];

 array[0];

 console.log(array[2]);

 // Array -> map
 array.map(element=> {
     console.log(element);
 })

 var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const funct = () =>{
    prompt('Hi');
}

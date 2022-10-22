//declare variables
// var vs let vs const

/*
var greeting = "Hello";
//function test(){
    if(true) {
        var greeting = "Hi";
    }
//}
*/
//let is very similar to how java works (obeys scope and cannot redeclare)
/*
let greeting = "Hello";
function test(){
if(true){
    let greeting = "Hi";
}
}
console.log(greeting);


const TEST_VALUE = 6;
*/
//TEST_VALUE = 5;

// == (checks value) vs === (checks value AND datatype)

console.log(1 == '1')
console.log( 1 === '1');
console.log(1 == true);
console.log (1 === true);
console.log(typeof(1))
console.log(typeof(true))
// !== compares values and type to ensure they are not the same

let number1 = 6;
let number2 =7;
let sum = number1+number2;

const result = number1 + " + " + number2 + " = " + sum;
console.log(result);

const result2 = `${number1} + ${number2} = ${sum}`;
console.log(result2);

//functions (assign functions)
/* function addTwo(x){
    return x + 2;
} */
//console.log(addTwo(5));

function add(x,y,z){
/*     console.log(typeof(z))
    if (z === undefined){
        z = 0;
    } */


    return x + y + (typeof(z) === 'undefined' ? 0 : z);
}

console.log(add(1,2,3));
console.log(add(1,2));


let num = 7;
//ternary operator 
// condition ? true : false 
console.log(num%2==0?'even':'odd');

//for loop
for (let index = 0; index < 7; index++) {
    console.log(index)
}

//arrays 

/* const colours = ['red', 'yellow', 'green', 'blue'];
for (const colour of colours) {
    console.log(colour);
}

const car = {make: 'Ford', model: 'Mustang'};
for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`);
    
}

console.log(car.make);
console.log(car['make']); */

const room =   {
    "id": "Spawn",
    "name": "Spawn",
    "description": "You are in an empty room with sand instead of a floor. The room is in a desert, called Bind.",
    "exits": [
      {
        "isLocked": false,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        "direction": "East",
        "adjacentRoom": "B-Hall"
      },
      {
        "isLocked": false,
        "direction": "West",
        "adjacentRoom": "A-Hall"
      },
      {
        "isLocked": false,
        "direction": "South",
        "adjacentRoom": "A-Elbow"
      }
    ]
  }

  for(const prop in room){
    if(prop !== 'exits')
        console.log(`${prop}: ${room[prop]}`);
    else{
        console.log('\nExits: ')
        for(const exit of room[prop]) {
            for (const exitprop in exit){
                console.log(`${exitprop}: ${exit[exitprop]}`);
            }
        }
    }
    console.log();
  }
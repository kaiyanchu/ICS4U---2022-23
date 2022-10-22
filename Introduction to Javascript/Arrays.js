let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// join
/* console.log(fruits.join());
console.log(fruits.join('--'));
// push
fruits.push('Kiwi');
console.log(fruits.join());
fruits.push(['Strawberry', 'Dragonfruit']);
console.log(fruits.join());
fruits.push(13);
console.log(fruits.join())
// pop
console.log(fruits.pop());
console.log(fruits.join());

console.log(JSON.stringify(fruits)); */
// shift
console.log(fruits.shift());
console.log(fruits.join())
// unshift
console.log(fruits.unshift('Potato'));
console.log(fruits.join())
// concat
fruits = fruits.concat(['Strawberry', 'Blueberry']);
console.log(JSON.stringify(fruits));
// slice
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(3);
console.log(citrus);
console.log(fruits);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);


// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Cherry"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);
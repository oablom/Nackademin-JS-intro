// console.log( upper("hello") )
// // Ska returnera "HELLO"
// console.log( lower("DONT SHOUT") )
// // Ska returnera "dont shout"

let userInput = prompt("Skriv något med stora bokstäver");

function toLower(input) {
  return input.toLowerCase();
}

console.log(toLower(userInput));

function toUpper(input) {
  return input.toUpperCase();
}

let userInput2 = prompt("Skriv något med små bokstäver");

console.log(toUpper(userInput2));

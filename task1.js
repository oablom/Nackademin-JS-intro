// console.log(firstValue([2, 3, 4, 5, 6]))
// // Ska returnera 2
// console.log(firstValue([7, 2, 1, 12, 32]))
// //Ska returnera 7
// console.log(firstValue(["a", "b", "c", "d", "e"]))
// //Ska returnera "a"
// console.log(firstValue( [{name:"John"}, {name:"Jane"}, {name:"Chris"}] )
// // SKa returnera {name: "John"}

let array1 = [2, 3, 4, 5, 6];
let array2 = [7, 2, 1, 12, 32];
let array3 = ["a", "b", "c", "d", "e"];
let array4 = [{ name: "John" }, { name: "Jane" }, { name: "Chris" }];

let arrays = [array1, array2, array3, array4];

// function firstValue(item) {
//   console.log(item[0]);
// }

// firstValue(array1);
// firstValue(array2);
// firstValue(array3);
// firstValue(array4);

function firstValue(item, arrayNum) {
  console.log(item[arrayNum][0]);
}

for (let i = 0; i < arrays.length; i++) {
  firstValue(arrays, i);
}

console.log;

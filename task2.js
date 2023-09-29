// console.log(lastValue([2, 3, 4, 5, 6]))
// // Ska returnera 6
// console.log(lastValue([7, 2, 1, 12, 32]))
// //Ska returnera 32
// console.log(lastValue(["a", "b", "c", "d", "e"]))
// //Ska returnera "e"
// console.log(lastValue( [{name:"John"}, {name:"Jane"}, {name:"Chris"}] )
// // SKa returnera {name: "Chris"}

let array1 = [2, 3, 4, 5, 6];
let array2 = [7, 2, 1, 12, 32];
let array3 = ["a", "b", "c", "d", "e"];
let array4 = [{ name: "John" }, { name: "Jane" }, { name: "Chris" }];

let arrays = [array1, array2, array3, array4];

// function lastValue(item) {
//   console.log(item[item.length - 1]);
// }
// lastValue(array1);
// lastValue(array2);
// lastValue(array3);
// lastValue(array4);

function lastValue(item) {
  console.log(item[item.length - 1]);
}

arrays.forEach(lastValue);

// console.log(getDayInMonth("January"));
// // Ska returnera 31
// console.log(getDayInMonth("March"));
// // Ska returnera 31
// console.log(getDayInMonth("April"));
// // Ska returnera 30

let months = {
  january: 1,
  february: 2,
  mars: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

function daysChecker() {
  let inputMonth = prompt(
    "Enter a month and I will write how many days it contains in 2023."
  );
  function daysInMonth(month) {
    return new Date(2023, months[month], 0).getDate();
  }

  inputMonth = inputMonth.toLowerCase();
  if (inputMonth in months) {
    console.log(daysInMonth(inputMonth));
  } else {
    alert("Wrong input, enter a month with letters.");
    daysChecker();
  }
}

daysChecker();

// let february = 2;
// let mars = 3;
// let april = 4;
// let may = 5;
// let june = 6;
// let july = 7;
// let august = 8;
// let september = 9;
// let october = 10;
// let november = 11;
// let december = 12;

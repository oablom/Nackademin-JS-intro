/*Skapa två arrayer, en som innehåller alla böcker som 
har lästs och en som innehåller alla böcker som du inte har läst*/

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
  //   {
  //     author: "Suzanne Collins",
  //     title: "Mockingjay: The Final Book of The Hunger Games",
  //     readingStatus: Float32Array,
  //   },
];

function readingStatusDivider(books) {
  let readBooksArray = ["Read books: "];
  let unReadBooksArray = ["Soon to be read books: "];
  for (let i = 0; i < books.length; i++) {
    if (books[i].readingStatus == true) {
      readBooksArray.push(books[i]);
    } else if (books[i].readingStatus == false) {
      unReadBooksArray.push(books[i]);
    } else {
      console.log(`Failed to add item: ${books[i]} due to
        unknown readingStatus`);
    }
  }
  function readBooksArrayFunction(array) {
    array.forEach(function (item) {
      console.log(item);
    });
  }
  readBooksArrayFunction(readBooksArray);
  readBooksArrayFunction(unReadBooksArray);
}

readingStatusDivider(library);

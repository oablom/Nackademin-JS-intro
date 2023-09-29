// Skriv ut vilka böcker som användaren har läst / inte läst
// Bill Gates bok, The Road Ahead, har du läst.
// Suzanne Collins bok,
//  Mockingjay: The Final Book of The Hunger Games  har du inte läst.

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
];

function firstLetterToLowerCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function readBooksOutput(books, trueFalse) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].readingStatus == trueFalse) {
      if (trueFalse == true) {
        output = `You have read ${books[i].title} by ${books[i].author}`;
      } else {
        output = `You have not read ${books[i].title} by ${books[i].author}`;
      }

      /* Nedan if-sats lägger till " and " efter varje mening då
      nästa mening innehåller samma påstående och inte är den sista
      meningen i funktionen*/
      if (i < books.length - 1 && books[i + 1].readingStatus === trueFalse) {
        output += " and ";
      }

      /*Nedan if-sats gör att det blir liten bokstav på allt förutom 
      första meningen, samt vid varje nytt påstående.*/
      if (i > 0 && books[i - 1].readingStatus === trueFalse) {
        output = firstLetterToLowerCase(output);
      }
      console.log(output);
    }
  }
}

readBooksOutput(library, true);
readBooksOutput(library, false);
// books.filter((books) => books.readingStatus === true);

// let readBookCounter = 0;
// let output = "";

// let trueCount = books.filter(
//   (book) => book.readingStatus === trueFalse
// ).length;

// console.log(output);
// readBookCounter += 1;

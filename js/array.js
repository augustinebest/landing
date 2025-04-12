let clubs = ["Arsenal", "Chelsea", "Liverpool", "Manchester United"]; // array of strings length: 4
let numbers = [1, 2, 3, 4, 5]; // array of numbers length: 5
let mixed = ["Arsenal", 1, true, null]; // array of mixed types length: 4
let empty = []; // empty array length: 0
let cars = [
  { color: "red", model: "BMW" },
  { color: "blue", model: "Mercedes" },
]; // array of objects length: 2

// Array methods
let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 }, // book 1
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 }, // book 2
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  }, // book 3
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    libraryID: 2345,
  }, // book 4
  { author: "J.R.R. Tolkien", title: "The Lord of the Rings", libraryID: 3456 }, // book 5
];

// console.log(library[5]);

// As a librarian, we want to be able to ADD, REMOVE, and SEARCH for books in our library.

// 1. ADD a book to the library
const book1 = {
  author: "James Robinson",
  title: "The New 52",
  libraryID: 1234,
};

const book2 = {
  author: "Olayinka Biola 1",
  title: "Independence of a country 1",
  libraryID: 1234,
};

const book3 = {
  author: "Olayinka Biola 2",
  title: "Independence of a country 2",
  libraryID: 9021,
};

function addBook(book) {
  // validate: check if the book ID already exists in the library
  for (let i = 0; i < library.length; i++) {
    if (library[i].libraryID === book.libraryID) {
      return "Book ID already exists in the library";
    }
  }
  library.push(book);
  return library;
}

addBook(book1);
addBook(book2);
addBook(book3);
// console.log("Adding Book 1: ", addBook(book1)); // add book1 to the library
// console.log("Adding Book 2: ", addBook(book2)); // add book2 to the library
// console.log("Adding Book 3: ", addBook(book3)); // add book3 to the library

// REMOVE a book from the library

function removeBook(libraryID) {
  const findBook = library.find((book) => book.libraryID === libraryID);
  console.log("FINDING THE BOOK: ", findBook);
  if (findBook) {
    library = library.filter((book) => book.libraryID !== libraryID);
    console.log("Book removed successfully");
    return library;
  } else {
    console.log("Book not found");
  }
}

console.log(removeBook(9021));

// Update a book in the library

function updateBook() {} // update a book in the library

// Borrow a Book


// function
// loop
// Data types
// Object, Array, array methods
// Local storage, session storage

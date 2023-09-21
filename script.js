const myLibrary = [];

function Book(author, title, pageNumber, hasRead) {
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.hasRead = hasRead;
}

const harryPotter = new Book(
  "J.K. Rowling",
  "Harry Potter and the Chamber of Secrets",
  251,
  true
);

const theShining = new Book("Stephen King", "The Shining", 688, true);

const theOutsider = new Book("Stephen King", "The Outsider", 541, false);

myLibrary.push(harryPotter);
myLibrary.push(theShining);
myLibrary.push(theOutsider);

console.log(myLibrary);

function addBookToLibrary() {
  // do stuff here
}

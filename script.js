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

function makeCard() {
  const cardContainer = document.querySelector(".card-container");

  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const hasRead = document.createElement("div");

  const bookTitleHeader = document.createElement("h3");
  bookTitleHeader.textContent = "Title";
  const bookTitlePara = document.createElement("p");
  bookTitlePara.textContent = "placeholder";

  const bookAuthorHeader = document.createElement("h3");
  bookAuthorHeader.textContent = "Author";
  const bookAuthorPara = document.createElement("p");
  bookAuthorPara.textContent = "placeholder";

  const bookPageNumHeader = document.createElement("h3");
  bookPageNumHeader.textContent = "Pages";
  const bookPageNumPara = document.createElement("p");
  bookPageNumPara.textContent = "placeholder";

  const bookHasReadHeader = document.createElement("h3");
  bookHasReadHeader.textContent = "Read";
  const bookHasReadinput = document.createElement("input");
  bookHasReadinput.type = "checkbox";

  title.appendChild(bookTitleHeader);
  title.appendChild(bookTitlePara);
  author.appendChild(bookAuthorHeader);
  author.appendChild(bookAuthorPara);
  pages.appendChild(bookPageNumHeader);
  pages.appendChild(bookPageNumPara);
  hasRead.appendChild(bookHasReadHeader);
  hasRead.appendChild(bookHasReadinput);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(hasRead);

  cardContainer.appendChild(card);
}

function drawlCards() {
  makeCard();
}

drawlCards();

function addBookToLibrary() {
  // do stuff here
}

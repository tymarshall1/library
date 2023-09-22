const myLibrary = [
  new Book(
    "J.K. Rowling",
    "Harry Potter and the Chamber of Secrets",
    251,
    true
  ),
  new Book("Stephen King", "The Shining", 688, true),
  new Book("Stephen King", "The Outsider", 541, false),
];

const dialog = document.querySelector("dialog");
const addBook = document.querySelector("#addBookModal");
const submitForm = document.querySelector("#bookForm");
const closeBtn = document.querySelector("#closeBtn");
const cardContainer = document.querySelector(".card-container");

addBook.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => {
  dialog.close();
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function Book(author, title, pageNumber, hasRead) {
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.hasRead = hasRead;
}

function makeCard(author, title, pageNumber, hasRead) {
  const card = document.createElement("div");
  card.classList.add("card");

  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookHasRead = document.createElement("div");

  const bookTitleHeader = document.createElement("h3");
  bookTitleHeader.textContent = "Title";
  const bookTitlePara = document.createElement("p");
  bookTitlePara.textContent = title;

  const bookAuthorHeader = document.createElement("h3");
  bookAuthorHeader.textContent = "Author";
  const bookAuthorPara = document.createElement("p");
  bookAuthorPara.textContent = author;

  const bookPageNumHeader = document.createElement("h3");
  bookPageNumHeader.textContent = "Pages";
  const bookPageNumPara = document.createElement("p");
  bookPageNumPara.textContent = pageNumber;

  const bookHasReadHeader = document.createElement("h3");
  bookHasReadHeader.textContent = "Read";
  const bookHasReadicon = document.createElement("img");

  hasRead
    ? (bookHasReadicon.src = "assets/checkbox.svg")
    : (bookHasReadicon.src = "assets/xicon.svg");

  bookTitle.appendChild(bookTitleHeader);
  bookTitle.appendChild(bookTitlePara);
  bookAuthor.appendChild(bookAuthorHeader);
  bookAuthor.appendChild(bookAuthorPara);
  bookPages.appendChild(bookPageNumHeader);
  bookPages.appendChild(bookPageNumPara);
  bookHasRead.appendChild(bookHasReadHeader);
  bookHasRead.appendChild(bookHasReadicon);

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(bookHasRead);

  cardContainer.appendChild(card);
}

function drawlCards() {
  myLibrary.forEach((book) => {
    makeCard(book.author, book.title, book.pageNumber, book.hasRead);
  });
}

function addBookToLibrary() {
  const bookTitle = document.querySelector("#bookTitle");
  const bookAuthor = document.querySelector("#author");
  const bookPageNum = document.querySelector("#pageNum");
  const bookHasRead = document.querySelector("#hasRead");

  myLibrary.push(
    new Book(
      bookAuthor.value,
      bookTitle.value,
      bookPageNum.value,
      bookHasRead.checked ? true : false
    )
  );

  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.lastChild);
  }

  drawlCards();
  submitForm.reset();
  dialog.close();
}

drawlCards();

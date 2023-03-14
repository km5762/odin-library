const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  const book = new Book(author, title, pages, read);
  myLibrary.push(book);
}

function displayLibrary(library) {
  const cards = document.querySelector(".cards");
  library.forEach((book) => {
    const bookCard = document.createElement("div");
  });
}

const addBook = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");

addBook.addEventListener("click", () => {
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

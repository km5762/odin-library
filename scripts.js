function Library() {
  this.books = [];
}

Library.prototype.addBook = function addBook(book) {
  this.books.push(book);
};

const library = new Library();
const addBook = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");
const form = document.querySelector("form");
const template = document.querySelector("template");
const cards = document.querySelector(".cards");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToDisplay(book) {
  const card = template.content.cloneNode(true);
  const tempTitle = card.querySelector(".card-title");
  const tempAuthor = card.querySelector(".card-author");
  const tempPages = card.querySelector(".card-pages");
  const tempRead = card.querySelector(".card-read");

  tempTitle.textContent += book.title;
  tempAuthor.textContent += book.author;
  tempPages.textContent += book.pages;
  tempRead.checked = book.read;
  cards.appendChild(card);
}

addBook.addEventListener("click", () => {
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const book = new Book(
    form.author.value,
    form.title.value,
    form.pages.value,
    form.read.checked
  );
  form.reset();
  modal.style.display = "none";
  addBookToDisplay(book);
  library.addBook(book);
});

cards.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("remove-book")) {
    e.target.parentElement.remove();
  }
});

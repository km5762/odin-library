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

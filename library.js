let myLibrary = [];

// Book constructor
function Book(title, author, pages, hasBeenRead) {
	
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;
}

// Create book object and store it into an array
function addBookToLibrary() {
	
	let newBook = new Book(title, author, pages, hasBeenRead);
	myLibrary.push(newBook);
	render(newBook);
}

// Test values
let title = window.prompt("title: ");
let author = window.prompt("title: ");
let pages = window.prompt("title: ");
let hasBeenRead = window.prompt("title: ");

// Display created book on user interface

function render(newBook) {
	let cardContainer = document.querySelector('.card');
	let bookTitle = document.createElement('div');
	let bookAuthor = document.createElement('div');
	let bookPages = document.createElement('div');
	let bookRead = document.createElement('div');
	
	bookTitle.textContent = newBook.title;
	cardContainer.appendChild(bookTitle);
	
	bookAuthor.textContent = newBook.author;
	cardContainer.appendChild(bookAuthor);
	
	bookPages.textContent = newBook.pages;
	cardContainer.appendChild(bookPages);
	
	bookRead.textContent = newBook.read;
	cardContainer.appendChild(bookRead);
}

addBookToLibrary();





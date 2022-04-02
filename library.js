let myLibrary = [];

// Book constructor
function Book(title, author, pages, hasBeenRead) {
	
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary() {
	
	
}

// Test values
let title = window.prompt("title: ");
let author = window.prompt("title: ");
let pages = window.prompt("title: ");
let hasBeenRead = window.prompt("title: ");

let newBook = new Book(title, author, pages, hasBeenRead);
console.log(newBook.title);

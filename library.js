let myLibrary = [];

// Book constructor
function Book(title, author, pages, hasBeenRead) {
	
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary() {
	
	let newBook = new Book(title, author, pages, hasBeenRead);
	myLibrary.push(newBook);
	console.log(newBook.title);
	console.log(myLibrary);
	console.log(myLibrary[0].title);
}

// Test values
let title = window.prompt("title: ");
let author = window.prompt("title: ");
let pages = window.prompt("title: ");
let hasBeenRead = window.prompt("title: ");

addBookToLibrary();

title = window.prompt("title: ");
author = window.prompt("title: ");

addBookToLibrary();
console.log(myLibrary[1].title);



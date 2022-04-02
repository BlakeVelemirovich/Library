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
	render();
}

// Test values
let title = window.prompt("title: ");
let author = window.prompt("title: ");
let pages = window.prompt("title: ");
let hasBeenRead = window.prompt("title: ");

function render() {
	
	
}





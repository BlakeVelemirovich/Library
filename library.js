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

// User input values aand function to grab them via pop up TODO: Grab user input via HTML form
let title;
let author;
let pages;
let hasBeenRead;

function getInput() {
	
	title = window.prompt("title: ");
	author = window.prompt("title: ");
	pages = window.prompt("title: ");
	hasBeenRead = window.prompt("title: ");
	
	addBookToLibrary();
}

const addNewCardBtn = document.querySelector('.addNewBook');

addNewCardBtn.addEventListener('click', function() {
	getInput();
});

// Display created book on user interface

function render(newBook) {
	
	const cardContainer = document.querySelector('#card');
	const card = document.createElement('div');
	const bookTitle = document.createElement('p')
	const bookAuthor = document.createElement('p');
	const bookPages = document.createElement('p');
	const bookRead = document.createElement('p');

    bookTitle.textContent = newBook.title;
	card.appendChild(bookTitle);
	
	bookAuthor.textContent = newBook.author;
	card.appendChild(bookAuthor);
	
	bookPages.textContent = newBook.pages;
	card.appendChild(bookPages);
	
	bookRead.textContent = newBook.hasBeenRead;
	card.appendChild(bookRead);
	
	cardContainer.appendChild(card);
}


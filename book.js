// Create new Library Object Array
let myLibrary = [];

function Book(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
}

Book.prototype.toggleRead = function() {
    this.hasRead = !this.hasRead;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryBook = document.querySelector('#library');
    libraryBook.innerHTML = ""; 

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement('div');
        bookElement.setAttribute("class", "book-card")
        bookElement.innerHTML = `
        <div class="book-card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author"> by ${book.author}</h5>
        </div>
        <div class="book-card-body">
            <p class="pages">${book.pages} pages</p>
            <p class="read-status ${book.hasRead ? 'read' : 'not-read'}"> ${book.hasRead ? "Read" : "Not Yet Read"}</p>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Book Read</button>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        </div>
        `;
        libraryBook.appendChild(bookElement);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value; 
    let author = document.querySelector('#author').value; 
    let pages = document.querySelector('#pages').value; 
    let hasRead = document.querySelector('#hasRead').value === 'true';
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    render();
}

    
// Add Default Data to Display in Table
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 320, true);
const harryPotter = new Book("Harry Potter and the Prisoner of Azkaban", "JK Rowling", 435, true);
const theRings = new Book("The Lord of the Rings", "JRR Tolkien", 1137, false);

myLibrary.push(theHobbit)
myLibrary.push(harryPotter)
myLibrary.push(theRings)

// "Show the dialog" button opens the dialog modally
const dialog = document.querySelector('dialog');
const addNewBook = document.querySelector('#add-book-btn');

addNewBook.addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector('#add-book-form').addEventListener('submit', () => {
    event.preventDefault();
    addBookToLibrary();
    document.getElementById('add-book-form').reset(); 
    dialog.close();
})


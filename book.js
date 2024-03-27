class Book {
    // Book Constructor
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
}

class Library {
    // Library Constructor to store books
    constructor() {
        this.library = []
    }

    addBookToLibrary(newBook) {
        this.library.push(newBook)
    }

    displayBooks() {
    }
}


// Create new Library Object Array
const myLibrary = new Library();

// Add Default Data to Display in Table
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 320, "Yes");
const theRings = new Book("The Lord of the Rings", "JRR Tolkien", 1178, "No");

myLibrary.addBookToLibrary(theHobbit);
myLibrary.addBookToLibrary(theRings);


const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#add-book-btn');


// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});



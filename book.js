// Create new Library Object Array
let myLibrary = [];

function Book(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
}

function render() {
    let libraryBook = document.querySelector('library');
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value; 
    let author = document.querySelector('#author').value; 
    let pages = document.querySelector('#pages').value; 
    let hasRead = document.querySelector('#hasRead').value; 
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    render(); 
}

    
// Add Default Data to Display in Table
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 320, "Yes");
const theRings = new Book("The Lord of the Rings", "JRR Tolkien", 1178, "No");

myLibrary.push(theHobbit)
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
    dialog.close();
})


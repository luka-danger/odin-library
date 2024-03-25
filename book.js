// Store all books inside myLibrary 
const myLibrary = [];

// Book Constructor 
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        let read; 
        if (hasRead == true) {
            read = "read";
        }
        else {
            read = "not read yet";
        }
        return `${title} by ${author}, ${pages} pages, ${read}`; 
    }
}

function addBookToLibrary(myBook) {
    myLibrary.push(myBook)
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, true);

const theFellowship = new Book("The Fellowship of The Ring", "JRR Tolkien", 327, false);

addBookToLibrary(theHobbit)
addBookToLibrary(theFellowship)

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}

displayBook();

/*
console.log(theHobbit.info())
console.log(theFellowship.info())

console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);

console.log(theHobbit.valueOf());
console.log(theFellowship.valueOf()); */ 
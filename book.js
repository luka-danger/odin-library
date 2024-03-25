// Store all books inside myLibrary 
const myLibrary = [];

class Book {
    // Book Constructor
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    info() {
        let read = this.hasRead ? "read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${read}`; 
    }

    static addBookToLibrary(myBook) {
        myLibrary.push(myBook)
    }

    static displayBook() {
        let books = document.getElementById('test')
        
        for (let i = 0; i < myLibrary.length; i++) {
            let newBook = document.createElement('li')
            newBook.textContent = myLibrary[i].title;
            books.appendChild(newBook);
        }
    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, true);
const theFellowship = new Book("The Fellowship of The Ring", "JRR Tolkien", 327, false);

Book.addBookToLibrary(theHobbit)
Book.addBookToLibrary(theFellowship)
Book.displayBook()


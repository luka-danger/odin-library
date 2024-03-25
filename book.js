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
        let table = document.getElementById('books-table');
        // Prevent all books from being re-added each time
        table.innerText = ''; 

        // Create table headers
        let headerRow = table.insertRow();
        let titleHeader = headerRow.insertCell();
        titleHeader.textContent = 'Title';
        let authorHeader = headerRow.insertCell();
        authorHeader.textContent = 'Author';
        let pagesHeader = headerRow.insertCell();
        pagesHeader.textContent = 'Pages';
        let hasReadHeader = headerRow.insertCell();
        hasReadHeader.textContent = 'Has Read?';
        let update = headerRow.insertCell(); 
        update.textContent = 'Update Read Status';
        let remove = headerRow.insertCell(); 
        remove.textContent = 'Remove';
        headerRow.style.fontWeight = 'bold';


        // Add Book Details To Table
        this.library.forEach(book => {
            let row = table.insertRow();
            let titleCell = row.insertCell();
            titleCell.textContent = book.title;
            let authorCell = row.insertCell();
            authorCell.textContent = book.author;
            let pagesCell = row.insertCell();
            pagesCell.textContent = book.pages;
            let readCell = row.insertCell();
            readCell.textContent = book.hasRead;
            
            // Update hasRead status
            let update = row.insertCell();
            let updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            update.appendChild(updateButton);
            updateButton.addEventListener('click', () => {
                // FIX ME: Remove
                console.log('cool')

                // FIX ME: Write code to update has read status
            })

            // Remove book from table 
            let remove = row.insertCell();
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            remove.appendChild(removeButton);
            removeButton.addEventListener('click', () => {
                // FIX ME: Remove
                console.log('clicked')

                // FIX ME: Write code to delete row
            })
        });

    }
}


// Create new Library Object Array
const myLibrary = new Library();

// Add Default Data to Display in Table
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 320, 'Yes');
const theRings = new Book("The Lord of the Rings", "JRR Tolkien", 1178, 'No');

myLibrary.addBookToLibrary(theHobbit);
myLibrary.addBookToLibrary(theRings);
myLibrary.displayBooks();

// Dialog Modal to enter new book
const form = document.getElementById('new-book-form');
        form.addEventListener('submit', function(event) {
            // Prevent default form submission
            // Enters info to table
            event.preventDefault(); 

            // Get form values
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = parseInt(document.getElementById('pages').value);
            const hasRead = document.getElementById('hasRead').value;

            // Create new book and add to library
            const newBook = new Book(title, author, pages, hasRead);
            myLibrary.addBookToLibrary(newBook);

            // Refresh the display
            myLibrary.displayBooks();

            // Clear the form fields
            form.reset();
        });

        const dialog = document.querySelector("dialog");
        const showButton = document.querySelector("dialog + button");
        const closeButton = document.querySelector("dialog button");
        
        // "Show the dialog" button opens the dialog modally
        showButton.addEventListener("click", () => {
          dialog.showModal();
        });
        
        // "Close" button closes the dialog
        closeButton.addEventListener("click", () => {
          dialog.close();
        });



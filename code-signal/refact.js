function BookManager() {
    this.books = [];

    this.createBook = function (id, title) {
        // TODO: return false if the book id already exists

        

        id = parseInt(id);

        if (this.findBookById(id) === undefined) {
            let book = new Object();
            book.id = id;
            book.title = title;
            this.books = [...this.books, book];
            return true;    
        } else {
            return false;
        }
        
    };

    this.updateBook = function (id, title) {
        // TODO: return false if the book doesn't exist

        id = parseInt(id);
        if (this.findBookById(id) === undefined) {
            return false;
        } else {
            const book = this.findBookById(id);
            if (book !== null) {
                book.title = title;
                return true;
            }
        }

        
    };

    this.deleteBook = function (id) {
        // TODO: return false if the book doesn't exist

        id = parseInt(id);
        if (this.findBookById(id) === undefined) {
            return false;
        } else {
        
            const book = this.books.find(book => book.id === id);
            delete book;
            return true;
        }
    };

    this.findBookById = function (id) {
        return this.books.find(book => book.id === parseInt(id));
    };

    this.findBookByTitle = function (title) {
        return this.books.find(book => book.title === title);
    };
}

// Do NOT edit the code below this comment.
// You should be able to complete this test without editing below this comment.

const bookManager = new BookManager();

function bookManagementRefactor(operations) {
    // Calls corresponding methods of bookManager based on the input
    return operations.map(operation => {
        const [methodName, ...params] = operation;
        let result = bookManager[methodName].call(bookManager, ...params);
        return result === undefined ? "null" : JSON.stringify(result);
    });
}

console.log(bookManagementRefactor([["createBook", "10", "Book_10"], ["createBook", "10", "Book_10"], ["updateBook", "10", "New_Book_10"], ["deleteBook", "9"], ["findBookById", "9"], ["findBookById", "10"], ["findBookByTitle", "Book_10"], ["findBookByTitle", "New_Book_10"]]))



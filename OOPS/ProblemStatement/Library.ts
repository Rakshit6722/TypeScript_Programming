class Book1 {
    constructor(public title: string, public author: string, public availabilityStatus: boolean) {
        this.title = title;
        this.author = author;
        this.availabilityStatus = availabilityStatus;
    }
}

class Library {
    public books: Book1[]
    constructor() {
        this.books = []
    }

    addBook(book: Book1): void {
        this.books.push(book)
    }

    removeBook(book: Book1): void {
        this.books = this.books.filter(b => b.title !== book.title)
    }

    borrow(book: Book1): void {
        let bookIndex = -1
        this.books.forEach((b, ind) => {
            if (b.title === book.title) {
                bookIndex = ind
                return
            }
        }
        )
        if (bookIndex !== -1) {
            if (this.books[bookIndex].availabilityStatus === false) {
                console.log(`Book not available: ${book.title}`)
                return
            }
            this.books[bookIndex].availabilityStatus = false
        }
        console.log(`Book borrowed: ${book.title}`)
    }

    returnBook(book: Book1): void {
        let bookIndex = -1
        this.books.forEach((b, ind) => {
            if (b.title === book.title) {
                bookIndex = ind
                return
            }
        }
        )
        if (bookIndex !== -1) {
            if (this.books[bookIndex].availabilityStatus === true) {
                console.log(`Book already returned: ${book.title}`)
                return
            }
            this.books[bookIndex].availabilityStatus = true
        }
        console.log(`Book returned: ${book.title}`)
    }
}

let book12 = new Book1("The Alchemist", "Paulo Coelho", true)
let book21 = new Book1("The Da Vinci Code", "Dan Brown", true)
let book3 = new Book1("The Monk Who Sold His Ferrari", "Robin Sharma", true)
let book4 = new Book1("The Power of Now", "Eckhart Tolle", false)

let library = new Library()
library.addBook(book12)
library.addBook(book21)
library.addBook(book3)
library.addBook(book4)

library.borrow(book4)
library.borrow(book12)
library.borrow(book4)
library.returnBook(book12)
library.borrow(book12)
library.returnBook(book12)
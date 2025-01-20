interface Book{
    readonly ISBN: string,
    title: string,
    author: string,
    availableCopies: number,
}

interface EBook extends Book{
    fileSize: string
}

const checkoutBook = (book: Book): boolean => {
    if(book.availableCopies){
        book.availableCopies -= 1
        return true
    }
    return false
}

let book1: Book = {
    ISBN: "ab1312ra",
    title: "The Alchemist",
    author: "xyz",
    availableCopies: 12
}
let book2: EBook = {
    ISBN: "ab1312ra",
    title: "The Alchemist",
    author: "xyz",
    availableCopies: 0,
    fileSize: "4mb"
}


console.log(checkoutBook(book1))
console.log(checkoutBook(book2))
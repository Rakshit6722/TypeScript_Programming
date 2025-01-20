"use strict";
const checkoutBook = (book) => {
    if (book.availableCopies) {
        book.availableCopies -= 1;
        return true;
    }
    return false;
};
let book1 = {
    ISBN: "ab1312ra",
    title: "The Alchemist",
    author: "xyz",
    availableCopies: 12
};
let book2 = {
    ISBN: "ab1312ra",
    title: "The Alchemist",
    author: "xyz",
    availableCopies: 0,
    fileSize: "4mb"
};
console.log(checkoutBook(book1));
console.log(checkoutBook(book2));

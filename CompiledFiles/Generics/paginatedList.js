"use strict";
const fetchPage = (page, pageSize, items) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        items: items.slice(start, end),
        total: items.length,
        currentPage: page,
        pageSize: pageSize
    };
};
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let page = 2;
let pageSize = 3;
console.log(fetchPage(page, pageSize, items));

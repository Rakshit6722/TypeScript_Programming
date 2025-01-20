interface PaginatedList<T>{
    items: T[],
    total: number,
    currentPage: number,
    pageSize: number
}

const fetchPage = <T>(page: number, pageSize: number, items: T[]): PaginatedList<T> => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        items: items.slice(start, end),
        total: items.length,
        currentPage: page,
        pageSize: pageSize
    }
}

let items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let page: number = 2;
let pageSize: number = 3;

console.log(fetchPage<number>(page, pageSize, items));
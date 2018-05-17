export function getBookList() {
    return fetch('https://raw.githubusercontent.com/OriLev/book-list/master/books.json')
    .then(response => response.json())
    .then(data => data.books);
}

const myLibrary = [];

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(){
    const book1 = new Book("Book1","author1",100);
    const book2 = new Book("Book2","author2",200);

    myLibrary.push(book1,book2);

    return myLibrary;
}

console.log(addBookToLibrary());
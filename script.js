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
}

function displayBooks(){
    addBookToLibrary();
    const BookNo = document.getElementsByClassName("BookNo");
    const BookName = document.getElementsByClassName("BookName");
    const BookAuthor = document.getElementsByClassName("BookAuthor");
    const BookPages = document.getElementsByClassName("BookPages")

    for(let i=0; i<myLibrary.length; i++){
        if(BookNo){
            BookNo[i].innerHTML = i+1;
        }
        if(BookName){
            BookName[i].innerHTML = myLibrary[i].name;
        }
        if(BookAuthor){
            BookAuthor[i].innerHTML = myLibrary[i].author;
        }
        if(BookPages){
            BookPages[i].innerHTML = myLibrary[i].pages;
        }
    }

}

document.addEventListener('DOMContentLoaded',
    function(){
        displayBooks();
    }
);
const myLibrary = [];

//Book Object or constructor for creating the book
function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

//This function 
function addBookToLibrary(formName, formAuthor, formPages) {
    const newbook = new Book(formName, formAuthor, formPages);

    myLibrary.push(newbook);
}

function displayBooks() {

    const tableBody = document.querySelector("table tbody");

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }


    for (let i = 0; i < myLibrary.length; i++) {

        const book = myLibrary[i];

        const row = document.createElement("tr");

        const bookName = document.createElement("td");
        bookName.className = "BookName";
        bookName.textContent = book.name;

        const bookAuthor = document.createElement("td");
        bookAuthor.className = "BookAuthor";
        bookAuthor.textContent = book.author;

        const bookPages = document.createElement("td");
        bookPages.className = "BookPages";
        bookPages.textContent = book.pages;

        const removeBtn = document.createElement('button');
        removeBtn.id = 'RemoveBtn';
        removeBtn.type = 'button';
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', function () {
            tableBody.removeChild(row);
            myLibrary.splice(i, 1);
        });

        row.appendChild(bookName);
        row.appendChild(bookAuthor);
        row.appendChild(bookPages);
        row.appendChild(removeBtn);

        tableBody.appendChild(row);
    }
}


const newBookBtn = document.getElementById("newBookBtn");
const formContainer = document.getElementById('formContainer');
const form = document.getElementById("bookForm");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formName = formData.get('Name');
    const formAuthor = formData.get('Author');
    const formPages = formData.get('Pages');

    addBookToLibrary(formName, formAuthor, formPages);
    displayBooks();

    form.reset();
});



newBookBtn.addEventListener('click', function () {

    if (formContainer.style.display === 'none') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }

});

document.addEventListener('DOMContentLoaded',
    function () {
        displayBooks();
    }
);
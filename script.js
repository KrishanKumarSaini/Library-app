const myLibrary = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(formName, formAuthor, formPages) {
    const newbook = new Book(formName, formAuthor, formPages);

    myLibrary.push(newbook);
}

function displayBooks() {
    
    const tableBody = document.querySelector("table tbody");

    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }


    for (let i = 0; i < myLibrary.length; i++) {

        const book = myLibrary[i];

        const row = document.createElement("tr");
        const bookN0 = document.createElement("td");
        bookN0.className = "BookNo";
        bookN0.textContent = i+1;

        const bookName = document.createElement("td");
        bookName.className = "BookName";
        bookName.textContent = book.name;

        const bookAuthor = document.createElement("td");
        bookAuthor.className = "BookAuthor";
        bookAuthor.textContent = book.author;

        const bookPages = document.createElement("td");
        bookPages.className = "BookPages";
        bookPages.textContent = book.pages;

        row.appendChild(bookN0);
        row.appendChild(bookName);
        row.appendChild(bookAuthor);
        row.appendChild(bookPages);

        tableBody.appendChild(row);
    }
}


const newBookBtn = document.getElementById("newBookBtn");

newBookBtn.addEventListener('click', function () {
    const formContainer = document.getElementById('formContainer');

    if (formContainer.style.display === 'none') {
        formContainer.style.display = 'block';

        const form = document.getElementById("bookForm");
        const outputDiv = document.getElementById("outputDiv");

        form.addEventListener('submit', function(event){
            event.preventDefault();

            const formData = new FormData(form);
            const formName = formData.get('Name');
            const formAuthor = formData.get('Author');
            const formPages = formData.get('Pages');
            
            addBookToLibrary(formName, formAuthor, formPages);
            displayBooks();

            form.reset();
        });


    } else {
        formContainer.style.display = 'none';
    }
});




document.addEventListener('DOMContentLoaded',
    function () {
        displayBooks();
    }
);
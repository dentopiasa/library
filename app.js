const myLibrary = []; //library array

function Book(title, author, pages, read) { //constructor 
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//add book function
function addBookToLibrary() { 
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

//add book button reveals form
let newBookBtn = document.querySelector("#addNew")
newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form")
    newBookForm.style.display = "block";
})

//submit button triggers addBookLibrary function
document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})

//render function
function render() {
    let libraryEl = document.querySelector("#library"); //selects library div
    libraryEl.innerHTML = ""; //library div refresh
    for (let i = 0; i < myLibrary.length; i++) { //loops through myLibrary array
    let book = myLibrary[i]; //saves individual myLibrary book  
    let bookEl = document.createElement("div"); //creates div element inside main library div 
    bookEl.innerHTML = `<p>${book.title}</p>`; //populates div element with book elements
    libraryEl.appendChild(bookEl); //main library div appends bookEl
    }
}



const myLibrary = []; //library array

function Book(name, author, pages, read) { //constructor 
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

const book1 =  new Book("1984", "Orwell", "1000", "yes")
const book2 =  new Book("The Animal Farm", "Orwell", "85", "no")

function addBookToLibrary() { //add book function
    let user = prompt(new Book);
    console.log(user);    
}
addBookToLibrary()

console.log(book1);
myLibrary.push(book1, book2);
console.log(myLibrary);



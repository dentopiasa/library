const myLibrary = []; //library array

function Book(name, author, pages) { //constructor 
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}



function addBookToLibrary() { //add book function
    //let user = prompt(new Book);
   
  
    myLibrary.push(new Book(user)); 
}

addBookToLibrary()
console.log(myLibrary); 




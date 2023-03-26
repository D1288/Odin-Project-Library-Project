const bookList = document.querySelector('.bookList');
const addButton = document.querySelector('.addButton')
const form = document.querySelector('form')

let library = [];


class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

function addBooktoLib() {
    let title = document.querySelector('#book').value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector('#read').value;
    let addedBook = new Book(title, author, read);
    library.push(addedBook)
    const bookItem = `<div class="eachBook">
                      <li>${addedBook.title}</li>
                      <li>${addedBook.author}</li>
                      <li><button class="switchRead">${addedBook.read}</button></li>
                      <button class="deleteButton">Delete</button>
                      </div>`;
    bookList.innerHTML += bookItem
    form.reset()

}

addButton.addEventListener('click', addBooktoLib);





bookList.addEventListener('click', (e) => {
    e.preventDefault();;
    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('switchRead')) {
        if (!e.target.classList.contains('notread')) {
            e.target.classList.toggle('notread')
            e.target.style.backgroundColor = 'red'
            e.target.textContent = 'Not Read'
        } else{
            e.target.classList.toggle('notread')
            e.target.style.backgroundColor = 'lightblue'
            e.target.textContent = 'Read'
        }
    }

})




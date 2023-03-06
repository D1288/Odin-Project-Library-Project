const bookList = document.querySelector('.bookList');
const addButton = document.querySelector('.addButton')
const remove = document.querySelector('.deleteButton')


function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBooktoLib() {
    let title = document.querySelector('#book').value;
    let author = document.querySelector('#author').value;
    let read = document.querySelector('#read').value;
    let addedBook = new Book(title, author, read);
    const bookItem = `<div class="eachBook">
                      <li>${addedBook.title}</li>
                      <li>${addedBook.author}</li>
                      <li><button class="switchRead">${addedBook.read}</button></li>
                      <button class="deleteButton">Delete</button>
                      </div>`;
    bookList.innerHTML += bookItem
    

}

addButton.addEventListener('click', addBooktoLib);





bookList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('switchRead')){
        e.target.classList.toggle('notread')
        if(e.target.textContent === 'Read'){
            e.target.textContent = 'Not Read'
        } else{
            e.target.textContent = 'Read'
        }
    } 
     

})




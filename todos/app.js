const addForm = document.querySelector('.add')

const ul_items = document.querySelector('.todos')

const search = document.querySelector('.search')



// Adding  Todo 

const AddTodo = (text) => {
    if (text.length > 0) {
        const item = `  <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${text}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`
        ul_items.innerHTML += item;
    }
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = addForm.add.value.trim();
    AddTodo(text)
    addForm.reset();
})


// Deleting Todo 

ul_items.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})


const searchFun = (text) => {
    Array.from(ul_items.children).filter((each) => {
        return !each.textContent.includes(text);
    }).forEach((each) => {
        console.log(each.textContent)
        each.classList.add('filter')
    })

    Array.from(ul_items.children).filter((each) => {
        return each.textContent.includes(text);
    }).forEach((each) => {
        console.log(each.textContent)
        each.classList.remove('filter')
    })
}


// Searching Todos

search.search.addEventListener('keyup', (e) => {
    searchFun(e.target.value.trim())
})
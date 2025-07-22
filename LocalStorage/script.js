// Set Item

localStorage.setItem('name', "suryateja")
localStorage.setItem('age', 29)


// get item 

console.log(localStorage.getItem('name'))

console.log(localStorage.getItem('age'))


// update item
localStorage.setItem('name', "cherry")



// or 
localStorage.age = 35
localStorage.clear()
console.log(localStorage.getItem('name'))
localStorage.removeItem('age')
console.log(localStorage.getItem('age'))


const todos = [{
        "name": "kummari",
        "age": "21",
        "gender": "female"

    },
    {
        "name": "kummari",
        "age": "21",
        "gender": "female"

    },
    {
        "name": "kummari",
        "age": "21",
        "gender": "female"

    },
    {
        "name": "kummari",
        "age": "21",
        "gender": "female"

    }
]

localStorage.setItem('todos', JSON.stringify(todos))

const items = JSON.parse(localStorage.getItem('todos'))
console.log(items)
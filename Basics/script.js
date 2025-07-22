let FirstName = "surya"
let LastName = "Teja"

console.log(FirstName + " " + LastName)

console.log(FirstName.indexOf('u'))

console.log(FirstName.length)

console.log(FirstName.concat(LastName))

console.log(FirstName.slice(1, 4))

console.log(FirstName.substr(1, 4))

// Numbers

const number = 10
console.log(number)

console.log(number % 2)

// Arrays 
const Names = ['Raju', 'Rani', 'Archana', 'Spoorthi', 'Megahana Reddy']

console.log(Names[0])
console.log(Names[1])
Names[0] = 'Teja'
console.log(Names[0])

let res = Names.join('-')
console.log(res)

console.log(Names.indexOf('Rani'))

let results = Names.concat(['Pooja', 'Keerthana Surya'])

console.log(results)

Names.push('Manasa Varma')

console.log(Names)

console.log(Names.pop())
console.log(Names, Names.length)
console.log(Names.splice(3, 4), "Line 46")

console.log(Names.length)


// Loops

// For Loop 
for (let i = 0; i < Names.length; i++) {
    console.log(Names[i], " ")
}


let r = 32
while (r != 0) {
    console.log(r % 10, "N")
    r = Math.floor(r / 10)
}

// While Loop


// Do While 
// let s = 10;
// do {
//     console.log(s)
//     s -= 1
// }
// while (s != 0);


// Functions 
greet("Suryateja")

function greet(name) {
    console.log(`Hello World ${name}`)
}



const funny = function(num) {
    console.log(num)
}
funny(10)


const arrowfunction = (Name = 'vamshi', age = 40) => {
    console.log(`${Name} ${age}`)
}

arrowfunction("Suryateja")

// For Each AND Call Back Function 

let people = ['surya', 'teja', 'chintu', 'keerthana', 'chinni', 'bow']

const ul = document.querySelector('.person')

let html = ``

people.forEach((name) => {
    html += `<li style="color:red">${name}</li>`

})

ul.innerHTML = html


// Objects 

const Details = {
    name: 'Suryateja',
    FirstName: 'Jennu',
    LastName: 'Maharaj',
    greet: () => {
        console.log('Hey Good Morning Suryateja')
    },
    useThis: () => {
        console.log(this)
    },
    notWorkwithArrow: function() {
        console.log(this.FirstName)
    }
}

console.log(Details)

console.log(Details.name)
console.log(Details['FirstName'])

Details.greet()

Details.useThis()

Details.notWorkwithArrow()


// Math Functions 

console.log(Math)

console.log(Math.PI)
console.log(Math.E)

const area = 7.7
console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

const random = Math.random()
console.log(Math.floor(random * 100))
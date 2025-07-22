// QUERY SELECTOR 

const mainContainer = document.querySelector('.container')
console.log(mainContainer)
const para = document.querySelector('p')


// Query SelectorAll 
const allParas = document.querySelectorAll('p')

allParas.forEach((each) => {
    each.innerText += 'new text'
})


// Id selector 

const idSector = document.getElementById('btn')

console.log(idSector)

// TAG NAME 
const tagSelector = document.getElementsByTagName('div')
console.log(tagSelector)

for (let i = 0; i < tagSelector.length; i++) {
    console.log(tagSelector[i])
    tagSelector[i].innerHTML += `<p>Hey Welcome to this World</p>`
}

// Class Name selectors 

const classSelector = document.getElementsByClassName('container')
console.log(classSelector, 'line 34')



// Set Attribute and get Attribute

const Anchor = document.querySelector('a')
console.log(Anchor)
console.log(Anchor.getAttribute('href'))
Anchor.setAttribute('href', "https://www.amazom.com")
console.log(Anchor)
Anchor.innerText = "Amazon"

// Stye Attribute

const DomHeading = document.querySelector('h2')
console.log(DomHeading.style)
DomHeading.style.color = 'red';
DomHeading.style.fontFamily = 'Roboto';
DomHeading.style.fontSize = '72px';

// When i add below styles the above styles are gone

DomHeading.setAttribute('style', 'color:green')

// Challenge 

const task = document.querySelectorAll('.challenge p')

task.forEach((item) => {
    let text = item.innerText
    console.log(text, typeof(text))
    if (text.includes('error')) {
        item.style.backgroundColor = 'red';
    } else if (text.includes('success')) {
        item.style.backgroundColor = 'green';
    }
})


// Parent and Child Relations

const airtical = document.querySelector('article')
console.log(airtical.children)
console.log(Array.from(airtical.children))

Array.from(airtical.children).forEach((child) => {
    child.classList.add('check-style')
})

console.log(airtical)

const heading = document.querySelector('article h2')
console.log(heading.nextElementSibling)
console.log(heading.nextElementSibling.parentElement)


// event Listners and event bubbling and event deligation

const body = document.querySelector('body')


const ul = document.createElement('ul')

body.appendChild(ul)

const items = ["item1", "item2", "item3"]

items.forEach((each) => {
    const li = document.createElement('li');
    li.textContent = each;
    li.style.listStyle = 'None'
    li.style.margin = '20px'
    li.style.backgroundColor = 'green';
    li.style.cursor = 'pointer'
    ul.append(li)

})


const addButton = document.createElement('button')
addButton.textContent = 'addMore'

body.appendChild(addButton)

addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'im newly added';
    li.style.listStyle = 'None'
    li.style.margin = '20px'
    li.style.backgroundColor = 'green';
    li.style.cursor = 'pointer'
    ul.prepend(li)
})

ul.addEventListener('click', (e) => {
    console.log(e)
    if (e.target.tagName === 'LI') {
        e.target.remove()
    }

})






// More EVENT listners 

heading.addEventListener('copy', (e) => {
    console.log(e)
    console.log('text is copied')
})

ul.addEventListener('mousemove', (e) => {
    console.log(e)
})

document.addEventListener('wheel', (e) => {
    console.log(e);
    console.log(window.scrollY);
    if (window.scrollY > 0) {
        document.body.style.backgroundColor = "grey";
    } else {
        document.body.style.backgroundColor = "white";
    }
});
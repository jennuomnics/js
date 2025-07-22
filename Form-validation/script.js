const form = document.querySelector('form');
const pattern = /^[a-zA-Z]{6,10}$/

form.addEventListener(('submit'), (e) => {
    e.preventDefault()
})

form.username.addEventListener(('keyup'), (e) => {
    if (pattern.test(e.target.value)) {
        // to know postions
        console.log(e.target.value.search(pattern))
        form.username.style.color = 'green';
    } else {
        form.username.style.color = 'red';
    }
})
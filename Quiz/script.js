const form = document.querySelector('form')

const results = document.querySelector('.quiz-results')

let total = 4
let correct = 0

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const percentage = document.createElement('h1')
    const value = Math.round(correct / total * 100)
    percentage.textContent = `${value} this is correct Percentage`
    results.appendChild(percentage)
})

form.addEventListener('change', (e) => {
    if (e.target.value === 'correct') {
        correct += 1
    }
})
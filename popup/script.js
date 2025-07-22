const popupbutton = document.querySelector('button')

const popup = document.querySelector('.popup-wrapper')

const popupclose = document.querySelector('.popupclose')

console.log(popupbutton)
console.log(popup)

popupbutton.addEventListener('click', (e) => {
    popup.style.display = 'block'
})

popupclose.addEventListener('click', (e) => {
    popup.style.display = 'none';
})
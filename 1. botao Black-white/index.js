
let corredor = document.getElementById('corredor')
let body = document.querySelector('body')


corredor.addEventListener('click', () => {
    corredor.classList.toggle('black')
    body.classList.toggle('black')
})
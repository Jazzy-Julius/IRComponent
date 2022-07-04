var btns = document.querySelectorAll('.btn_container button')
var Card2 = document.querySelector('.card2')
var Card = document.querySelector('.card')
var span = document.querySelector('span')

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e => {
        const rating = e.target.textContent
        span.textContent = rating
        Card2.classList.remove('hide')
        Card.classList.add('hide')
    })
})
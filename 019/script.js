const selector = document.querySelector('.radio-selection')

const bgFirst = document.querySelector('.first')
const bgSecond = document.querySelector('.second')
const bgThird = document.querySelector('.third')


document.getElementById('one').addEventListener('click', () => {
    selector.style.left = '4.8%'

    bgFirst.style.left='0%'
    bgSecond.style.left='100%'
    bgThird.style.left='200%'
})

document.getElementById('two').addEventListener('click', () => {
    selector.style.left = '38%'

    bgFirst.style.left='-100%'
    bgSecond.style.left='0%'
    bgThird.style.left='100%'
})

document.getElementById('three').addEventListener('click', () => {
    selector.style.left = '71.5%'
    
    bgFirst.style.left='-200%'
    bgSecond.style.left='-100%'
    bgThird.style.left='0%'
})
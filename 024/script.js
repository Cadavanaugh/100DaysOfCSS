const button = document.querySelector('button')
const svg = document.querySelector('svg')
const sparkle = document.querySelector('.sparkle')
const circle = document.querySelector('#inner')

button.addEventListener('click', () => {
    button.style.width = '80px'
    button.style.borderColor = '#00000020'
    button.style.backgroundColor = 'transparent'
    button.innerText = ''
    button.style.visibility = 'hidden'

    svg.style.opacity = '1'
    
    sparkle.style.visibility = 'visible'
    sparkle.style.animation = 'pulsar .7s 2s forwards'

    setTimeout(() => {
        circle.style.fill = 'white'
        document.querySelector('img').style.opacity = '1'
    },2_000)
})
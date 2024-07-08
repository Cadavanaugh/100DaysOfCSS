const closeButton = document.querySelector('#close')
const mainPicture = document.querySelector('#main')
const downSection = document.querySelector('.background')
const upperSection = document.querySelector('.wallpaper')

const timer = '.3s'

document.querySelectorAll('.picture').forEach((picture, i) => {
    picture.addEventListener('click', () => {
        // Movement animation
        upperSection.style.transitionDelay = '0s'
        downSection.style.transitionDelay = '0s'
        closeButton.style.transitionDelay = timer
        mainPicture.style.transitionDelay = timer

        closeButton.style.top = '5%'
        mainPicture.style.top = '50%'

        downSection.style.top = '50%'
        upperSection.style.top = '0%'

        // Change picture
        mainPicture.src = picture.children[1].src
        // Change wallpaper
        upperSection.style.backgroundImage = `url("./assets/wallpapers/${picture.id}.jpg")`
    })
})

document.querySelector('#close').addEventListener('click', () => {
    closeButton.style.transitionDelay = '0s'
    mainPicture.style.transitionDelay = '0s'
    downSection.style.transitionDelay = timer
    upperSection.style.transitionDelay = timer

    closeButton.style.top = '-10%'
    mainPicture.style.top = '-10%'

    downSection.style.top = '100%'
    upperSection.style.top = '-50%'
})
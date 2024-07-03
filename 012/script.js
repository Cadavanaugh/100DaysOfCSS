document.querySelector('span').addEventListener('mouseover', () => {
    sectionElement = document.querySelector('section')
    sectionElement.style.visibility = 'visible'
    sectionElement.style.animation = 'appear .7s ease-in-out forwards'
})

document.querySelector('span').addEventListener('mouseout', () => {
    sectionElement = document.querySelector('section')    
    sectionElement.style.animation = 'disappear .7s ease-in-out forwards'
    setTimeout(() => {
        sectionElement.style.visibility = 'hidden'      
    }, 700)
})
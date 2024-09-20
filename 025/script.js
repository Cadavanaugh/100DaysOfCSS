const marker = document.querySelector('.marker')
const card = document.querySelector('.card')

marker.addEventListener('click', () => {
  marker.style.transitionDelay = '0s'
  marker.style.opacity = 0
  marker.style.transform = 'translate(-50%, -50%) rotateY(90deg)'
  marker.style.visibility = 'hidden'

  card.style.transitionDelay = '.5s'
  card.style.visibility = 'visible'
  card.style.opacity = 1
  card.style.transform = 'translate(-50%, -50%) rotateY(0deg)'
})


card.addEventListener('click', () => {
    card.style.transitionDelay = '0s'
    card.style.opacity = 0
    card.style.transform = 'translate(-50%, -50%) rotateY(90deg)'
    card.style.visibility = 'hidden'
  
    marker.style.transitionDelay = '.5s'
    marker.style.visibility = 'visible'
    marker.style.opacity = 1
    marker.style.transform = 'translate(-50%, -50%) rotateY(0deg)'
})
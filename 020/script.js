const ANIMATION_TIME_IN_SECONDS = 1

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.circle').style.animation = `shrink-ball ${ANIMATION_TIME_IN_SECONDS}s ease-in-out forwards`
  document.querySelector('.circle-border').style.animation = `shrink-ball ${ANIMATION_TIME_IN_SECONDS}s ease-in-out .1s forwards`

  document.querySelector('.mail').style.animation = `undraw-mail ${ANIMATION_TIME_IN_SECONDS}s linear forwards`
  document.querySelector('.plane').style.animation = `undraw-mail ${ANIMATION_TIME_IN_SECONDS}s linear reverse 1s forwards`

  document.querySelector('.plane').style.translate = `300% -300%`

  document.querySelector('button').innerText='RESET'
})
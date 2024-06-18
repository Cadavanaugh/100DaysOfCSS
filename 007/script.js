// Searchbar appearing
const lupa = document.querySelector('header > i')
const input = document.querySelector('input')
let lupaClicked = false

lupa.addEventListener('click', () => {
    lupaClicked = !lupaClicked
    if (lupaClicked) {
        input.style.visibility = 'visible'
        input.style.opacity = '1'
        input.style.transform = 'translate(-15px, 0)'
    } else {
        input.style.visibility = 'hidden'
        input.style.opacity = '0'
        input.style.transform = 'translate(0, 0)'
    }
})

// Aside menu appearing
const menu = document.querySelector('.menu');
const conteiner = document.querySelector('.conteiner');
const aside = document.querySelector('aside');
let menuClicked = false

menu.addEventListener('click', () => {
  menuClicked = !menuClicked;
  const transitionValue = '.6s';

  let translateValue = menuClicked ? 'translate(0px,0)' : 'translate(-80px,0)';
  conteiner.style.transition = transitionValue;
  conteiner.style.transform = translateValue;

  translateValue = menuClicked ? 'translate(0,0)' : 'translate(80px,0)';
  aside.style.transition = transitionValue;
  aside.style.transform = translateValue;
})


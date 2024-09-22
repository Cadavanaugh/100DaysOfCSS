const button = document.querySelector('.ok-button')
const span = document.querySelector('span')
const img = document.querySelector('img')
const number = document.querySelector('.number')
const main = document.querySelector('main')
const body = document.querySelector('body')

const musicTitle = document.querySelector('h1')
const musicLyrics = document.querySelector('p')

const audio = document.querySelector('audio')
const audioSource = document.querySelector('audio source')

const updateCardInfo = (paramMuiscTitle, paramMusicLyrics, paramImg, paramAudio, bgColor, paramNumberColor, paramButtonColor, paramButtonHoverColor, paramBoxShadow) => {
    musicTitle.innerText = paramMuiscTitle
    musicLyrics.innerText = `"${paramMusicLyrics}"`

    audioSource.src = `assets/${paramAudio}.mp3`
    audio.load()

    img.src = `assets/${paramImg}.png`
    img.style.width = 'initial'
    body.style.backgroundColor = bgColor

    number.style.backgroundColor = paramNumberColor
    button.style.backgroundColor = paramButtonColor
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = paramButtonHoverColor
    })
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = paramButtonColor
    })

    main.style.boxShadow = paramBoxShadow
}

button.addEventListener('click', () => {
    main.style.scale = '1.1'
    main.style.opacity = '0'
    
    const currentCornerNumber = Number(span.innerText)

    setTimeout(() => {
        main.style.scale = '0.7'
        if (currentCornerNumber==3) span.innerText = 1
        else span.innerText = currentCornerNumber + 1
    },365)

    setTimeout(() => {
        main.style.scale = '1'
        main.style.opacity = '1'

        switch(Number(span.innerText)){
            case 1:
                updateCardInfo('Máquina do Tempo',
                                'Temaki apertado. Se ela não quer me ligar, eu não to ligado.',
                                'matue\ wallpaper',
                                'Maquina do Tempo Cut',
                                'black',
                                '#561b71', '#be3cfb', '#8529af',
                                '0px 0px 400px 102px rgba(110,5,178,0.76)')
                break
            case 2:
                updateCardInfo('WAR',
                                'Pra mim o mínimo do mínimo é dar meu máximo.', 'ret\ wallpaper',
                                'War Cut',
                                '#f4ca0e',
                                '#c79f4b', '#f4ca0e', '#ba9a0d',
                                '10px 10px 40px 0px rgba(0,0,0,0.75)')

                const mediaQuery = window.matchMedia("(min-width: 1300px)")
                function handleWidthChange(e) {
                    if (e.matches) {
                        img.style.width = '100%'
                    } else {
                        img.style.width = 'initial'
                    }
                }
                mediaQuery.addListener(handleWidthChange)
                handleWidthChange(mediaQuery)
                break
            case 3:
                updateCardInfo('Anota Placa',
                                'Lacoste e Kenner. Nós vale o que tem.',
                                'da coro',
                                'Tz Cut',
                                '#e48ca2',
                                'black', 'black', 'black',
                                '10px 10px 40px 0px rgba(0,0,0,0.75)')
                break
        }
    },500)
})
const sendButton = document.querySelector('button')
const progressBar = document.querySelector('.progress')

sendButton.addEventListener('click', () => {
    uploadArea.style.border = 'none';

    progressBar.style.display = 'block';

    const imgElement = document.querySelector('img');
    imgElement.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220726%2Fourmid%2Fpngtree-loading-icon-dot-ring-vector-transparent-png-image_6061369.png&f=1&nofb=1&ipt=ee837de67cf1fa16a79836e232067e691b5e3f4d7e288ed23493a86aff373c68&ipo=images'
    imgElement.classList = 'loading';

    sendButton.innerText = 'Uploading...'

    setTimeout(() => {
        sendButton.innerText = 'Done'

        imgElement.style.opacity = 0
        imgElement.style.animation = 'none'
        document.querySelector('span').remove()

        
        progressBar.style.display = 'none';

        setTimeout(() => {
            imgElement.src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fcheckmark-icon-transparent%2Fcheckmark-icon-transparent-8.png&f=1&nofb=1&ipt=5d16a9305ede0b3d7f4d6f71c83ba3731785a965b339376663255bad5e82850a&ipo=images'
            imgElement.style.opacity = 1
        },500)
    }, 3000)
})
const searchInput = document.getElementById('search-input')
const searchList = document.getElementById('search-list')

searchInput.addEventListener('input', async function() {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchInput.value}&origin=*`)
    const data = await response.json()
    searchList.innerHTML = ''
    searchInput.style.boxShadow = 'none'

    data[1].slice(0, 3).forEach(item => {
        const li = document.createElement('li')
        const a = document.createElement('a')

        a.textContent = item
        a.setAttribute('href', `https://en.wikipedia.org/wiki/${item}`)
        a.setAttribute('target', '_blank')
        li.appendChild(a)

        searchList.appendChild(li)
    })
})
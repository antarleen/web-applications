const form = document.querySelector('#searchForShow')
const showList = document.querySelector('#searchedShow')

const viewSearchResult = (showDetails) => {
    for (result of showDetails) {
        if (result.show.image.medium) {
            const newShow = document.createElement('li')
            const newImg = document.createElement('img')
            const showName = result.show.name
            newImg.src = result.show.image.medium
            newImg.classList.add('image')
            newShow.append(newImg)
            showList.append(newShow)
            showList.append(showName)

        }

    }
    form.elements.query.value = ''
}

const getShowDetails = async (show) => {
    const config = {params:{q:show}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config)
    const showDetailsResults = res.dat
    viewSearchResult(res.data)
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    const showSearched = form.elements.query.value
    if (showSearched) {
        getShowDetails(showSearched)
    }
})
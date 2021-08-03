const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Submitted');
    // console.dir(form); to get a list of the elements
    const searchTerm = form.elements.query.value;
    // settings query parameters and other parameters
    const apiConfig = { params: { q: searchTerm } };
    const response = await axios.get(
        `https://api.tvmaze.com/search/shows`,
        apiConfig
    );
    console.log(response.data);
    appendImages(response.data);
    form.elements.query.value = '';
});

const appendImages = (tvShows) => {
    for (let tvShow of tvShows) {
        if (tvShow.show.image) {
            const img = document.createElement('img');
            img.src = tvShow.show.image.medium;
            document.body.append(img);
        }
    }
};

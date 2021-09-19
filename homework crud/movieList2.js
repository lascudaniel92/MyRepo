'use strict';

async function getMovies2() {
  const api = new Movies();
  const movies = await api.getAllMovies2();

  const displayedContainer = document.querySelector('[movies]');
  const fragment = document.createDocumentFragment();

  for (const movie of movies.results) {
    // if (movie.Title.toLowerCase().includes('batman')) {
    //   continue;
    // }
    const article = document.createElement('article');
    const title = document.createElement('p');
    const iconLink = document.createElement('a');
    const icon = document.createElement('img');

    title.append(movie.Title);
    title.classList.add('titledetail');
    icon.setAttribute('src', movie.Poster);
    const baseURL = window.location.origin;
    iconLink.append(icon);
    iconLink.setAttribute('href', baseURL + '/movieDetails.html?id=' + movie._id);
    article.append(title, iconLink);
    article.classList.add('mainarticle');
    fragment.append(article);
    console.log(movie);
  }
  displayedContainer.innerHTML = '';
  displayedContainer.append(fragment);
}

getMovies2();

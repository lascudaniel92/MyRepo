'use strict';
let firstImdbId = '';
async function getDetails() {
  const api = new Movies();

  const urlParams = new URLSearchParams(location.search);
  const movieId = urlParams.get('id');
  const movie = await api.getMovieById(movieId);

  const fragment = document.createDocumentFragment();
  const displayedContainer = document.querySelector('[movie-details]');

  const article = document.createElement('article');
  const title = document.createElement('p');
  const genre = document.createElement('div');
  const plot = document.createElement('p');

  const ratingDiv = document.createElement('div');
  const imdbRating = document.createElement('p');
  const ratingStar = document.createElement('img');
  const poster = document.createElement('img');
  const ratingBox = document.createElement('ul');

  if (movie.Title) {
    title.append(movie.Title);
    title.classList.add('titledetail2');
  }

  if (movie.Poster) {
    poster.append(movie.Poster);
    poster.setAttribute('src', movie.Poster);
  }

  if (movie.Genre) {
    const genres = movie.Genre.split(',');
    genres.forEach((genreObject) => {
      const oneGenre = document.createElement('p');

      oneGenre.append(genreObject);
      oneGenre.classList.add('onegenre');
      genre.classList.add('genre');
      genre.append(oneGenre);
    });
  }

  if (movie.Plot) {
    plot.append(movie.Plot);
  }
  console.log(movie);
  if (Array.isArray(movie.Ratings)) {
    movie.Ratings.forEach((ratingObject) => {
      const ratingElement = document.createElement('li');
      const source = document.createElement('p');
      const value = document.createElement('span');
      source.append(ratingObject.Source);
      value.append(ratingObject.Value);
      ratingElement.append(source, value);
      ratingBox.append(ratingElement);
      ratingBox.classList.add('ratingbox');
    });
  }

  if (movie.imdbRating) {
    imdbRating.append(movie.imdbRating);
    ratingStar.setAttribute('src', 'ratingstar.png');
    ratingStar.classList.add('ratingstar');
    ratingDiv.append(imdbRating, ratingStar);
    ratingDiv.classList.add('ratingdiv');
  }

  article.classList.add('mainarticle');
  article.append(title, poster, genre, plot, ratingDiv, ratingBox);
  fragment.append(article);

  displayedContainer.innerHTML = '';
  displayedContainer.append(fragment);
}
getDetails();

if (!localStorage.accessToken) {
  const editdeletebuttons = document.querySelector('[data-editdeletebuttons]');
  editdeletebuttons.setAttribute('class', 'hidden');
}

async function editDetails() {
  const api = new Movies();
  const urlParams = new URLSearchParams(location.search);
  const movieId = urlParams.get('id');
  const movie = await api.getMovieById(movieId);
  const editDetails = document.querySelector('[editdetails]');
  const editbutton = document.querySelector('[editbutton]');

  const displayedContainer = document.querySelector('[newrating]');
  const dataspanplus = document.querySelector('[data-spanplus]');
  const dataspanminus = document.querySelector('[data-spanminus]');
  dataspanplus.addEventListener('click', plusRating);
  dataspanminus.addEventListener('click', minusRating);

  if (movie.imdbID !== '') {
    firstImdbId = movie.imdbID;
  }

  const { elements } = document.querySelector('form');

  for (let [key, value] of Object.entries(movie)) {
    const field = elements.namedItem(key);
    field && (field.value = value);
  }
  if (Array.isArray(movie.Ratings)) {
    movie.Ratings.forEach((ratingObject) => {
      const div = document.createElement('div');
      const label = document.createElement('label');
      const p1 = document.createElement('p');
      const input1 = document.createElement('input');
      const p2 = document.createElement('p');
      const input2 = document.createElement('input');

      label.setAttribute('for', 'ratings');
      p1.append('Source:');
      input1.setAttribute('autocomplete', 'off');
      input1.setAttribute('type', 'text');
      input1.setAttribute('name', 'Source');
      p2.append('Value:');
      input2.setAttribute('autocomplete', 'off');
      input2.setAttribute('type', 'text');
      input2.setAttribute('name', 'Value');

      input1.setAttribute('value', ratingObject.Source);
      input2.setAttribute('value', ratingObject.Value);

      div.setAttribute('class', 'ratings2');
      div.append(label, p1, input1, p2, input2);

      displayedContainer.appendChild(div);
    });
  }

  function plusRating() {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const p1 = document.createElement('p');
    const input1 = document.createElement('input');
    const p2 = document.createElement('p');
    const input2 = document.createElement('input');

    label.setAttribute('for', 'Ratings');
    p1.append('Source:');
    input1.setAttribute('autocomplete', 'off');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'Source');
    p2.append('Value:');
    input2.setAttribute('autocomplete', 'off');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'Value');
    div.setAttribute('class', 'ratings2');
    div.append(label, p1, input1, p2, input2);
    displayedContainer.appendChild(div);
  }

  function minusRating() {
    const allElems = document.getElementsByClassName('ratings2');
    if (allElems.length >= 1) {
      const lastElem = allElems[allElems.length - 1];
      displayedContainer.removeChild(lastElem);
    }
  }
  editDetails.classList.remove('hidden');
  editbutton.setAttribute('disabled', '');
}

const editbutton = document.querySelector('[editbutton]');
editbutton.addEventListener('click', editDetails);

async function submitChanges(e) {
  e.preventDefault();
  const api = new Movies();
  const data = new FormData(e.target);
  const movie = Object.fromEntries(data.entries());

  if (movie.Title.length < 4) {
    window.alert('Please insert at least 4 characters for the Title!');
    return;
  }
  if (movie.Year.length < 4) {
    window.alert('Please insert at least 4 digits for the Year!');
    return;
  }
  if (movie.Genre.length < 2) {
    window.alert('Please insert at least 4 letters for the Genre!');
    return;
  }

  if (movie.imdbID.length < 4) {
    window.alert('Please insert at least 4 characters for the ImdbID!');
    return;
  }
  delete movie.Source;
  delete movie.Value;
  const sources = document.getElementsByName('Source');
  const values = document.getElementsByName('Value');
  movie.Ratings = [];

  for (let i = 0; i < sources.length; i++) {
    const rating = {};
    rating.Source = sources[i].value;
    rating.Value = values[i].value;

    if (!sources[i].value.replace(/\s/g, '').length || !values[i].value.replace(/\s/g, '').length) {
      alert('Please insert values for the Ratings forms!');
      return;
    }

    movie.Ratings.push(rating);
  }

  const allMovies = await api.getAllIds();
  const ids = allMovies.results;

  function imdbIdExists(imdbID) {
    return ids.some(function (el) {
      return el.imdbID === imdbID;
    });
  }

  if (imdbIdExists(movie.imdbID) === true) {
    if (movie.imdbID == firstImdbId) {
      await api.editMovie(movie);
      location.reload();
    } else {
      alert('The imdbID of the movie already exists in our database!');
    }
  } else {
    if (window.confirm('If you click yes you will add a new movie into our database!')) {
      delete movie._id;
      const newmovie = await api.addMovie(movie);
      location.assign('movieDetails.html?id=' + newmovie._id);
    }
  }
}

const submitchanges = document.getElementById('editdetails');
submitchanges.addEventListener('submit', submitChanges);

async function submitDelete() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
}

const buttondelete = document.getElementById('deleteitem');
const buttoncancel = document.getElementById('canceldelete');
const buttonx = document.getElementById('spanx');
const modal = document.getElementById('modal');

buttondelete.addEventListener('click', async function () {
  const api = new Movies();
  const urlParams = new URLSearchParams(location.search);
  const movieId = urlParams.get('id');
  modal.setAttribute('class', 'hidden');
  await api.deleteMovie(movieId);

  location.assign('movieList.html');
});

buttoncancel.onclick = async function () {
  modal.setAttribute('class', 'hidden');
};

buttonx.onclick = function () {
  modal.setAttribute('class', 'hidden');
};

const deletebutton = document.getElementById('deletebutton');
deletebutton.addEventListener('click', submitDelete);

window.addEventListener('mouseup', function (event) {
  const pol = document.getElementById('modalbox');
  if (event.target != pol && event.target.parentNode != pol) {
    modal.setAttribute('class', 'modal hidden');
  }
});

const submitv2 = document.getElementById('addrawdata');
submitv2.addEventListener('click', addRawData);

async function addRawData() {
  const api = new Movies();
  const text = document.getElementById('rawinput');
  if (window.confirm('If you click yes you will add a new movie into our database!')) {
    const newmovie = await api.addMovie(text.value, false);
    location.assign('movieDetails.html?id=' + newmovie._id);
  }
}

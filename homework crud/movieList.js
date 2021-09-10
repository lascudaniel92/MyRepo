'use strict';

let take = 9;
let skip = 0;

(function Authentication() {
  document.querySelector('[data-login=switch]')?.addEventListener('click', toggleClasses);
  document.querySelector('[data-register=switch]')?.addEventListener('click', toggleClasses);

  function toggleClasses(e) {
    e.preventDefault();

    const elements = document.querySelectorAll('[data-login], [data-register]');

    for (const elem of elements) {
      elem.classList.toggle('hidden');
    }
  }

  document.querySelector('[data-form]')?.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const inputs = e.target.elements;

    const username = inputs.username.value;
    const password = inputs.password.value;
    const repeat_password = inputs.repeat_password.value;

    if (isRegister() && password !== repeat_password) {
      console.error('The passwords did not match!');
      return;
    }

    if (!username || !password) {
      console.error('All fields are mandatory!');
      return;
    }

    sendAuthRequest(username, password);
  }

  function isRegister() {
    return !document.querySelector('[data-register]').classList.contains('hidden');
  }

  async function sendAuthRequest(username, password) {
    const data = await fetch(`https://movies-app-siit.herokuapp.com/auth/${isRegister() ? 'register' : 'login'}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());

    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
      location.assign('movieList.html');
    } else {
      console.warn(data.message);
    }
  }
})();

const signOutButton = document.querySelector('[data-signout]');

signOutButton.addEventListener('click', signOut);
signOutButton.setAttribute('class', 'hidden');

if (localStorage.accessToken) {
  const headerMovieList = document.querySelector('[data-header]');
  const signOutButton = document.querySelector('[data-signout]');

  headerMovieList.setAttribute('class', 'hidden');
  signOutButton.setAttribute('class', 'signoutbutton');
}

function signOut() {
  window.localStorage.removeItem('accessToken');
  location.assign('movieList.html');
}

function nextPage() {
  const skipP = parseInt(skip) + 9;
  const location = window.location.href.split('?')[0];
  const url = location + '?take=' + take + '&skip=' + skipP;
  window.location.replace(url);
}
function previousPage() {
  const skipP = parseInt(skip) - 9;
  const location = window.location.href.split('?')[0];
  const url = location + '?take=' + take + '&skip=' + skipP;
  window.location.replace(url);
}

function getSkipFromUrl() {
  const params = new URLSearchParams(location.search);
  return params.get('skip');
}
function getTakeFromUrl() {
  const params = new URLSearchParams(location.search);
  return params.get('take');
}

async function getMovies() {
  const api = new Movies();
  let skipParam = getSkipFromUrl();
  let takeParam = getTakeFromUrl();
  if (skipParam !== null) {
    skip = skipParam;
  }
  if (takeParam !== null) {
    take = takeParam;
  }

  const movies = await api.getAllMovies(take, skip);
  const buttonPrev = document.querySelector('[button-prev]');
  const buttonNext = document.querySelector('[button-next]');
  buttonNext.addEventListener('click', nextPage);
  buttonPrev.addEventListener('click', previousPage);
  if (movies.pagination.links.prev) {
    buttonPrev.removeAttribute('disabled');
  } else {
    buttonPrev.setAttribute('disabled', 'disabled');
  }

  if (movies.pagination.links.next) {
    buttonNext.removeAttribute('disabled');
  } else {
    buttonNext.setAttribute('disabled', 'disabled');
  }

  const displayedContainer = document.querySelector('[movies]');
  const fragment = document.createDocumentFragment();

  for (const movie of movies.results) {
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
  }

  displayedContainer.innerHTML = '';
  displayedContainer.append(fragment);
}

getMovies();

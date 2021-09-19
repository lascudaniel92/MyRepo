'use strict';
const apiUrl = 'https://movies-app-siit.herokuapp.com/';

class Movies {
  endpoint = apiUrl + 'movies';

  getAllMovies(take, skip) {
    const url = this.endpoint + '?take=' + take + '&skip=' + skip;
    return fetch(url).then(this.handleResponse);
  }

  getAllMovies2() {
    const url = 'https://movies-app-siit.herokuapp.com/movies?take=10000';
    return fetch(url).then(this.handleResponse);
  }

  handleResponse(res) {
    if (!res.ok) {
      console.warn('Something bad happened');
      throw 'This is a bad error';
    }
    return res.json();
  }

  getMovieById(id) {
    return fetch(`${this.endpoint}/${id}`).then(this.handleResponse);
  }

  async addMovie(movie, json = true) {
    const accessToken = localStorage.getItem('accessToken');
    return await fetch(`${this.endpoint}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': accessToken,
      },
      body: json ? JSON.stringify(movie) : movie,
    }).then(this.handleResponse);
  }

  async editMovie(movie) {
    const movieid = movie._id;
    delete movie._id;
    const accessToken = localStorage.getItem('accessToken');
    const data = await fetch(`${this.endpoint}/${movieid}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': accessToken,
      },
      body: JSON.stringify(movie),
    }).then((res) => res.json());
  }

  async deleteMovie(movieid) {
    const accessToken = localStorage.getItem('accessToken');
    const data = await fetch(`${this.endpoint}/${movieid}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': accessToken,
      },
    });
  }
}

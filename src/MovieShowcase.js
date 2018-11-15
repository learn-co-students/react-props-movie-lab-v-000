import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const m = [];
    movieData.forEach((movie) => {
         m.push(<MovieCard  title={movie['title']} IMDBRating={movie['IMDBRating']} poster={movie['poster']} genres={movie['genres']} />)
    });
    return m;
  }

  render() {
      const movies = this.generateMovieCards();
    return (
      <div id="movie-showcase">
        {movies}
      </div>
    )
  }
}

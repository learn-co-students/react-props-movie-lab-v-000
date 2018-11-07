import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    //const titles = movieData.map(movie => movie.title);
    //const genres = movieData.map(movie => movie.genres);
    //const rating = movieData.map(movie => movie.IMDBRating);

    return movieData.map((data, index) => <MovieCard title={data.title} genres={data.genres} IMDBRating={data.IMDBRating} poster={data.poster} />)

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    const mapped = movieData.map(function(movie) { 
      const title = movie.title;
      const genres = movie.genres;
      const IMDBRating = movie.IMDBRating;
      const poster = movie.poster;
    })
    return (
      <
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over movieData array
    return movieData.map(function(movie) {
      return <MovieCard
        IMDBRating={movie.IMDBRating}
        title={movie.title}
        genres={movie.genres}
        poster={movie.poster}/>
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

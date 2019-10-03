import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () =>
    movieData.map((movie) => {
      return <MovieCard
      title={movie.title}
      poster= {movie.poster}
      genres={movie.genres}
      IMDBRating={movie.IMDBRating} />
    } )


  render() {
    return (
      <div id="movie-showcase">
      <h1> This should generate the movie cards </h1>
        {this.generateMovieCards()}
      </div>
    )
  }
}

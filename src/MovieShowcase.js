import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generate = () => {
    return movieData.map((movie) =>
      <MovieCard 
        title={movie.title} 
        IMDBRating={movie.IMDBRating}
        genres={movie.genres} 
        poster={movie.poster}/>
  )};

  render() {
    return (
      <div id="movie-showcase">
        {this.generate()}
      </div>
    )
  }
}
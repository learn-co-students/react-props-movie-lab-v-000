import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    let data = movieData;
    return (
      data.map((d) => <MovieCard title={d.title} IMDBRating={d.IMDBRating} genres={d.genres} poster={d.poster} />)
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

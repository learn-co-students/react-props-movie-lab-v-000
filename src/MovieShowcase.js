import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
   return movieData.map( movie => <MovieCard title={this.title} IMDBRating={this.IMDBRating} genres={this.genres} poster={this.poster} />)
  }
// <MovieCard title={element.title} IMDBRating={element.IMDBRating} genres={element.genres} poster={element.poster} />
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

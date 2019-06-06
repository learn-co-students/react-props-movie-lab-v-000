import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    movieData.map((movie) =>
     this.title = movie.title

   )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        <MovieCard title={this.props.title} IMDBRating={this.props.IMDBRating} genres={this.props.genres} poster={this.props.poster} />
      </div>
    )
  }
}

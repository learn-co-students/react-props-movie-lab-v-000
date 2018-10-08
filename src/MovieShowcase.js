import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
  //  let movieCards = movieData.map ( function (movie) {
      return <MovieCard  title={movieData[0].title} IMDBRating={movieData[0].IMDBRating} genres={movieData[0].genres} poster={movieData[0].poster} />
  //  });
  //  console.log("gen cards", movieCards.join(' '));
  //  return movieCards.join(' ');
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

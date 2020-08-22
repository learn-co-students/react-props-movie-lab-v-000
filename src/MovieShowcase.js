import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    return movieData.map((movie, index) => <MovieCard key={index} title={movie.title} IMDBRating={movie.IMDBRating} poster={movie.poster} genres={movie.genres}/>
    )

    //console.log(movieArray)
    //return movieArray
    // map over your movieData array and return an array of the correct JSX
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )

  }
}

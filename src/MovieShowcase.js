import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    let i = 0
    const movies = movieData.map((movie) => {
    	return <MovieCard key={i=+1} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>
    })
    return movies;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

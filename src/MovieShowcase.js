import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component { 

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
		const arr = movieData.slice()
		return arr.map(this.oneMovie)
  }
	
	oneMovie = (item) => < MovieCard title={item.title} IMDBRating={item.IMDBRating} genres={item.genres} poster={item.poster} />

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

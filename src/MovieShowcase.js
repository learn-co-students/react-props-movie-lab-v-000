import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js' // because you're iterating over it below

export default class MovieShowcase extends Component {

  generateMovieCards = () => { return movieData.map((data) => <MovieCard {...data} />) } // so you gotta import
  // return a movie card for each movie, generate from movie data. not sure what {...date does though}

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

// .map over the imported movie data array and render MovieCards for each element. (see documentaion)
// Don't forget to pass all 4 props

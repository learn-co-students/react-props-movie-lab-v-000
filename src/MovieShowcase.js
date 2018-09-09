import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard'
import movieData from './data'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((element) => <MovieCard title={element.title} IMDBRating={element.IMDBRating} genres= {element.genres} poster={element.poster}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

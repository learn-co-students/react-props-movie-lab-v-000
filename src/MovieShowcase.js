import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    const cardData = movieData.map((movie, index) => <li key={index}><MovieCard title={movie.title}
    IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} /></li>)
    return <ul>{cardData}</ul>
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div> )
  }
}

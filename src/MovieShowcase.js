import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    MovieCard.map(movie) {
      const title = movie.title
      const IMDBRating = movie.IMDBRating
      const genres = movie.genres
      const poster = movie.poster
    }




    <MovieCard title={title} IMDBRating={IMDBRating} genres={genres} poster = {poster}/>

    // map over your movieData array and return the correct 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        <h2>{this.props.title}</h2>
        <h2>{this.props.IMDBRating}</h2>
        <h2>{this.props.genres}</h2>
        <h2>{this.props.poster}</h2>
      </div>
    )
  }
}
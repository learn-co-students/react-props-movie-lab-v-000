import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    let movies = movieData.map(movie => <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>);
    return movies;
  }

  // This is the better way to do it.
  // generateMovieCards = () => {
  //   return movieData.map((data, idx) => <MovieCard key={idx} {...data} />)
  // }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

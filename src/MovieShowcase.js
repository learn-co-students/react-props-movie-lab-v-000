import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movieData) => {
    const movies = movieData.map(({ title, IMDBRating, genres, poster}) =>
      <MovieCard key={title} 
                 title={title}
                 IMDBRating={IMDBRating}
                 genres={genres}
                 poster={poster}
      />
    );
    return movies;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}

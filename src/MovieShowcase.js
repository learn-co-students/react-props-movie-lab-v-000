import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />)
    // movieData.map(movie => {
    //     const genresArr = movie.genres
    //     const title = movie.title
    //     const imb = movie.IMDBRating
    //     const art = movie.poster
    //   }),
    //    <MovieCard movieTitle={title} imbRating={imb} genres={genresArr} poster={art} />
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

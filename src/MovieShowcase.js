import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    render (
      movieData.map(function (el){
        <MovieCard return title={el.title}
          return IMDBRating={el.IMDBRating}
          return genres={el.genres}
          return poster={el.poster} />
      })
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

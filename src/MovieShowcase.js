import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   
    // movieData.map(function(data, idx) {
    // return <MovieCard key={idx} {...data} />
    // });
     return movieData.map((data, idx) => <MovieCard key={idx} {...data} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

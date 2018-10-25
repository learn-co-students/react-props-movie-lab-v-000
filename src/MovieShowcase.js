import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    
    console.log(movieData.length)
    console.log(movieData[0].title)
    console.log(movieData[0].IMDBRating)
    console.log(movieData[0].genres)
    console.log(movieData[0].poster)
    
    return movieData.map((e, i) => (
      <div key={i}>
        <MovieCard title={e.title} IMDBRating={e.IMDBRating} genres={e.genres} poster={e.poster}/>
      </div>
    )) 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

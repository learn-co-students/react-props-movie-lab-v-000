import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

// export default class MovieShowcase extends Component {

//   generateMovieCards = () => {
//     // map over your movieData array and return the correct 
//     return movieData.map((data, ids) => <MovieCard key={ids} {...data} />);
//   }

//   render() {
//     return (
//       <div id="movie-showcase">
//         {this.generateMovieCards()}
//       </div>
//     )
//   }
// }

const MovieShowcase = () => {
  let generateMovieCards = () => {
    return movieData.map((data, ids) => <MovieCard key={ids} {...data} />);
  }

  return (
    <div id="movie-showcase">
      {generateMovieCards()}
    </div>
  )
}

export default MovieShowcase;
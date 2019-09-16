import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const returnedData = movieData.map(function(movie, index) {
      return <MovieCard key={index} {...movie} />;
    });

    return returnedData;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

//or:
// import React, { Component } from "react";
// import MovieCard from "./card-components/MovieCard.js";
// import movieData from "./data.js";

// export default class MovieShowcase extends Component {
//   generateMovieCards = () => {
//     return movieData.map((movieProps, index) => {
//       return (
//         <MovieCard
//           key={index}
//           title={movieProps.title}
//           IMDBRating={movieProps.IMDBRating}
//           genres={movieProps.genres}
//           poster={movieProps.poster}
//         />
//       );
//     });
//   };
//   // map over your movieData array and return the correct

//   render() {
//     return <div id="movie-showcase">{this.generateMovieCards()}</div>;
//   }
// }

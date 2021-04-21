import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie, index) => {
      return <MovieCard key={index} {...movie} />
   })
    // return [
    //   movieData.map(movie =>
    //     <div>
    //     <MovieCard key={movie.id}
    //               title={movie.title}
    //               IMDBRating={movie.IMDBRating}
    //               genres={movie.genres}
    //               poster={movie.poster} />
    //             </div>
    //   )
    // ]
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

// <MovieCard key={"title"}
//           value={movie.title} />,
// <MovieCard key={"IMDBRating"}
//             value={movie.IMDBRating.toString()} />,
// <MovieCard key={"genres"}
//           value={movie.genres} />,
// <MovieCard key={"poster"}
//           value={movie.poster} />
//

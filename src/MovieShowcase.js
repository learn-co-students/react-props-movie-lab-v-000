import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((movie) => (
      <MovieCard
        title={movie.title}
        IMDBRating={movie.IMDBRating}
        genres={movie.genres}
        poster={movie.poster}
      />
    ));
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

// different ways to destructure the props:

// return movieData.map(({title, IMBDRating, genres, poster}) => (
//   <MovieCard
//     title={title}
//     IMDBRating={IMDBRating}
//     genres={genres}
//     poster={poster}
//   />
// ));

//spread object
// return movieData.map((movie) => (
//   <MovieCard {...movie} />
// ));

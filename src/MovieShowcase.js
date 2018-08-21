import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    const movies = movieData.map(function(m) {
      return (
        <MovieCard
          title={m.title}
          IMDBRating={m.IMDBRating}
          genres={m.genres}
          poster={m.poster}
        />
      );
    });
    return movies;
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

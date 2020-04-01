import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () =>
    movieData.map(data => {
      const { poster, title, genres, IMDBRating } = data;
      return (
        <MovieCard
          poster={poster}
          title={title}
          genres={genres}
          IMDBRating={IMDBRating}
        />
      );
    });

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

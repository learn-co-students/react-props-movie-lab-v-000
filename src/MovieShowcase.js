import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map(data => (
      <MovieCard
        key={data.id}
        title={data.title}
        poster={data.poster}
        IMDBRating={data.IMDBRating}
        genres={data.genres}
      />
    ));
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";
import { link } from "fs";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((data, index) => <MovieCard key={index} {...data} />);
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

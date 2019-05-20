import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
//import movieData from './data.js'

const movieData = [
  {
    title: 'Choux and Maru go to Istanbul',
    IMDBRating: 3,
    genres: ['cats', 'adventure', 'romance'],
    poster: 'choux-maru-istanbul'
  },
  {
    title: 'Choux and Maru',
    IMDBRating: 4,
    genres: ['cats', 'drama', 'romance'],
    poster: 'choux-maru-part-1'
  },
  {
    title: 'ChromeBoi',
    IMDBRating: 5,
    genres: ['thriller', 'romance'],
    poster: 'chromeboi'
  },

  {
    title: 'Escape from VIM',
    IMDBRating: 0,
    genres: ['an awful movie'],
    poster: 'escape-from-vim'
  },
  {
    title: 'GoldenEye',
    IMDBRating: 4,
    genres: ['mystery', 'thriller', 'crime'],
    poster: 'goldeneye'
  },
  {
    title: 'Handsome Boy Modeling Club',
    IMDBRating: 2,
    genres: ['coming of age', 'romance'],
    poster: 'handsome-boy'
  },
  {
    title: "Maru's Spinoff: Trapped in the Sheets",
    IMDBRating: 5,
    genres: ['Adventure'],
    poster: 'marus-spinoff'
  },
  {
    title: 'Terrance: King of the Rats',
    IMDBRating: 1,
    genres: ['drama'],
    poster: 'terrance-king'
  },
  {
    title: 'The Trash Man',
    IMDBRating: 5,
    genres: ['crime', 'period piece'],
    poster: 'the-trash-man'
  },
]


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((movie) =>
      <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres = {movie.genres} poster = {movie.poster}/>
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct

    let cards = movieData.map( card =>
    {MovieCard.props.title} = card.title
    {MovieCard.props.IMDBRating} = card.IMDBRating
    {MovieCard.props.genres} = card.genres
    {MovieCard.props.poster} = card.poster
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

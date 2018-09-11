import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
  return movieData.map((card, index) =>
			<MovieCard
				key={index}
				title={card.title}
				IMDBRating={card.IMDBRating}
				genres={card.genres}
				poster={card.poster}
				label="my data"
			/>
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

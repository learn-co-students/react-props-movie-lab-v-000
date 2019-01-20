import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () =>{
    return (movieData.map(m =>{
      return (<MovieCard title = {m.title} IMDBRating={m.IMDBRating}
         poster = {m.poster} genres = {m.genres}/>)


    // map over your movieData array and return the correct
  })
)
}

  render() {
    console.log(movieData[0])
    return (

      <div id="movie-showcase">

        {this.generateMovieCards()}

      </div>
    )
  }
}

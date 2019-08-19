import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {

}

  generateGenres = () => {
    const genres = this.props.genres
    let text
    for(let i=0; i<genres.length; i++){
      text += `${genres[i]}, `
    }
    text = text.slice(0, -2)
    return text
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
      <span />
        { /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */
          (this.props.IMDBRating === null) ? <h4>No Rating Found</h4> : <img>src={this.props.IMDBRating} alt=""</img>
         }
        <span />
        <h5 className="genres">
          `${this.generateGenres()}`
        </h5>
      </div>
    )
  }
}

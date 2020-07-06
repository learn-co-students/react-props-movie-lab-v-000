import defaultPoster from '../assets/poster-imgs/default.png'
import cmi from '../assets/poster-imgs/choux-and-maru-go-to-istanbul.png'
import cmp1 from '../assets/poster-imgs/choux-and-maru-p1.png'
import cb from '../assets/poster-imgs/chromeboi.png'
import efv from '../assets/poster-imgs/escape-from-vim.png'
import goldeneye from '../assets/poster-imgs/goldeneye.jpg'
import hbmc from '../assets/poster-imgs/handsome-boy-modeling-club.png'
import msts from '../assets/poster-imgs/marus-spinoff-trapped-in-the-sheets.png'
import tkr from '../assets/poster-imgs/terrance-king-of-the-rats.png'
import ttm from '../assets/poster-imgs/the-trash-man.png'

import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';


const posterMap = {
  'choux-maru-istanbul': cmi,
  'choux-maru-part-1': cmp1,
  'chromeboi': cb,
  'escape-from-vim': efv,
  'goldeneye': goldeneye,
  'handsome-boy': hbmc,
  'marus-spinoff': msts,
  'terrance-king': tkr,
  'the-trash-man': ttm,
  'default': defaultPoster
}

export default class MovieCard extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="movie-card">
        {/* which component should receive which props? */}
        <CardFront />
        <CardBack poster={this.props.poster} title={this.props.title} genres={this.props.genres} IMDBRating={this.props.IMDBRating}/>
      </div>
    )
  }
}

// typically with react the best way to figure out how to render a prop, is to
// look at the parent rendering component
// main ways to give a child props is through the parent component or by setting default props
// Don't forget your default props!
// -so to figure out props first check default props and then check the parent, to figure out what kind
// of data you're working with
MovieCard.defaultProps = {
  poster: 'default',
  title: 'Unknown',
  IMDBRating: null,
  genres: ['No Genre(s) Found']
}

import React, { Component } from 'react';
import './chess.css';
import ChessCard from './chess-card-components/ChessCard.js'
import chessData from './chessData.js'

export default class ChessShowcase extends Component {

  generateChessCards = () => {
    return chessData.map((data, idx) => <ChessCard mysuperspecialkey={idx} {...data} />)
  }

  render() {
    return <div id="chess-showcase">{this.generateChessCards()}</div>;
  }
}

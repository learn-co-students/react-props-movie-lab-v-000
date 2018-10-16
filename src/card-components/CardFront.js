import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    // Random text b/c learn submit won't submit
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}

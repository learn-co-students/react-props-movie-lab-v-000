import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
    //  <div className="card-front" style={{backgroundImage: `url(${''})`}}>
      <div className="card-front" js style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}

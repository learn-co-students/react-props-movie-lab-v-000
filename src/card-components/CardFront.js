import React from 'react';

// export default class CardFront extends Component {

//   render() {
// 		return (
// 			<div className="card-front" style={{ backgroundImage: `url(${this.props.poster})` }}
// 			/>
// 		);
// 	}
// }

const CardFront = props => {
  return (
    <div className="card-front" style={{ backgroundImage: `url(${props.poster})` }} />
  )
}

export default CardFront;
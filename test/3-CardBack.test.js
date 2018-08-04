import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import CardBack from '../src/card-components/CardBack'


describe('<CardBack />', () => {
  
  const genres = [
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you"
  ]
  
  const cardBack = shallow(<CardBack title="Rolling in the Deep" genres={genres} IMDBRating={3} />)
  const text = cardBack.text()
  

})

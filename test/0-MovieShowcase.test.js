import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import MovieShowcase from '../src/MovieShowcase';
import MovieCard from '../src/card-components/MovieCard'


describe('<MovieShowcase />', () => {
  let cards;
  
  beforeEach(() => {
    cards = shallow(<MovieShowcase />).find(MovieCard)
  })
  
  
})

import React, { Component } from 'react';
import renderer from 'react-test-renderer';

// Component imports
import ProductContainer from '../src/archive';
import ProductItem from '../src/productItem';

describe('components', () => {
  describe('<ProductContainer/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<ProductContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

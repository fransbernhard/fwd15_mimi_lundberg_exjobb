import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import ProductContainer from '../src/archive';

describe('components', () => {
  describe('<ProductContainer/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <ProductContainer
          products={[
            {id: 1, category: 'paint'},
            {id: 2, category: 'paint'}
          ]}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

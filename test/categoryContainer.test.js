import React, { Component } from 'react';
import renderer from 'react-test-renderer';

// Component imports
import CategoryContainer from '../src/archive';
import Archive from '../src/archive';
import CategoryItem from '../src/productItem';

describe('components', () => {
  describe('<CategoryContainer/>', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <CategoryContainer
            categories={[]}
            filterHandler={"paint"}
            products={[0]}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

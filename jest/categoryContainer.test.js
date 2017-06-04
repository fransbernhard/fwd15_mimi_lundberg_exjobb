import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import CategoryContainer from '../src/components/categoryContainer';

describe('components', () => {
  describe('<CategoryContainer/>', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <CategoryContainer
            filterHandler={jest.fn}
            products={[
              {category: "fruit"},
              {category: "fish"}
            ]}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

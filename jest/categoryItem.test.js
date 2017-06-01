import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import CategoryItem from '../src/components/categoryItem';

describe('components', () => {
  describe('<CategoryItem/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <CategoryItem
          onClick={jest.fn}
          category="paint"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
 

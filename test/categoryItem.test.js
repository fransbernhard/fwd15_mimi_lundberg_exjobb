import React, { Component } from 'react';
import CategoryItem from '../src/components/categoryItem';
import renderer from 'react-test-renderer';

describe('components', () => {
  describe('<CategoryItem/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <CategoryItem
          handleClick="paint"
          category=[0]
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

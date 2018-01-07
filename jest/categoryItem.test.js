import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Category from '../src/components/category';

describe('components', () => {
  describe('<Category/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Category
          handleClick={jest.fn}
          category="paint"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

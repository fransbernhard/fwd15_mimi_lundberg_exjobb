import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import CategoryItem from '../src/components/categoryItem';

describe('components', () => {
  describe('<CategoryItem/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <CategoryItem
          handleClick={jest.fn}
          category="paint"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

test('Category item change class when clicked', () => {
  const component = renderer.create(
    <CategoryItem
      category="paint"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.filterHandler();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

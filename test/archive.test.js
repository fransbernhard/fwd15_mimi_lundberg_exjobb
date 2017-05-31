// yarn test -- --no-cache --watch

import React, { Component } from 'react';
import renderer from 'react-test-renderer';

// Component import
import Menu from '../src/components/menu';
import Footer from '../src/components/footer';
import ProductContainer from "../src/archive";
import CategoryContainer from '../src/archive';
import Archive from '../src/archive';

describe('components', () => {
  describe('<Archive/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Archive />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

import React, { Component } from 'react';
import Archive from '../src/archive';
import ProductItem from '../src/productItem';
import Modal from 'react-modal';
import renderer from 'react-test-renderer';

describe('components', () => {
  describe('<ProductItem/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<ProductItem />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

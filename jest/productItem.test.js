import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Product from '../src/product';
import Modal from 'react-modal';

describe('components', () => {
  describe('<Product/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Product
          product={{id: 1, category: 'paint', name: 'clowd', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '23-sm.png', previewImg: "23.png"}}
          key= {{id: 1}}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

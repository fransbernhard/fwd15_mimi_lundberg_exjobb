import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import ProductItem from '../src/productItem';
import Modal from 'react-modal';

describe('components', () => {
  describe('<ProductItem/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <ProductItem
          product={
            {id: 1, category: 'paint', name: 'clowd', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '23-sm.png', previewImg: "23.png"}
          }
          key= {
            {id: 1}
          }
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
 

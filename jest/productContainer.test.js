import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import ProductContainer from '../src/archive';

describe('components', () => {
  describe('<ProductContainer/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <ProductContainer
          products={[
            {id: 1, category: 'paint', name: 'clowd', type: 'matt emulsion', stocked: true, size: '100x130', thumbnail: '23-sm.png', previewImg: "23.png"},
            {id: 2, category: 'paint', name: 'dålig sikt', type: 'matt emulsion/olja/akryl', stocked: true, size: '100x130', thumbnail: '24-sm.png', previewImg: "24.png"}
          ]}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

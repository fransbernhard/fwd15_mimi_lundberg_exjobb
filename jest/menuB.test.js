import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import MenuB from '../src/components/menuB';

describe('components', () => {
  describe('<MenuB />', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <MenuB />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

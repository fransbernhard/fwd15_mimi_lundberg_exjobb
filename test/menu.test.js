import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Menu from '../src/components/menu';

describe('components', () => {
  describe('<Menu/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Menu />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

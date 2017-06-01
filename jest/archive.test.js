import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Archive from '../src/archive';

describe('components', () => {
  describe('<Archive/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <Archive />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
}); 

import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import About from '../src/components/about';

describe('components', () => {
  describe('<About/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <About
          src="../images/magden.jpg"
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

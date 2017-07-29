import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import About from '../src/components/about';

describe('component', () => {
  describe('<About/>', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <About />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

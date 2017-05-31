import React, { Component } from 'react';
import Footer from '../src/components/footer';
import renderer from 'react-test-renderer';

describe('components', () => {
  describe('<Footer/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

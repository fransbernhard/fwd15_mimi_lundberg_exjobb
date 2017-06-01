import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Footer from '../src/components/footer';

describe('components', () => {
  describe('<Footer/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
 

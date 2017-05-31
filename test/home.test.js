import React, { Component } from 'react';
import renderer from 'react-test-renderer';

// Component imports
import Menu from '../src/components/menu';
import Archive from '../src/archive';
import About from '../src/components/about';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';
import Home from '../src/app';

describe('components', () => {
  describe('<Home/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

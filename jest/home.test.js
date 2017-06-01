/**
* @jest-environment jsdom
*/

import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/home';

describe('components', () => {
  describe('<Home/>', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Home />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

/**
* @jest-environment jsdom
*/

import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/home';

jest.mock("react-dom", () => ({ render: () => jest.fn() }));

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
 

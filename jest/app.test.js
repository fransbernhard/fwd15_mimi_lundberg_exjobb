import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import App from '../src/app';

jest.mock("react-dom", () => ({ render: () => jest.fn() }));

describe('components', () => {
  describe('<App/>', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <App />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

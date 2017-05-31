import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Scrollchor from 'react-scrollchor';
import Menu from '../src/components/menu';
import renderer from 'react-test-renderer';

describe('components', () => {
  describe('<Menu/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Menu />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Contact from '../src/components/contact';

describe('components', () => {
  describe('<Contact/>', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Contact />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

test('Input field updates on msg input', () => {
  const component = renderer.create(
    <Contact />
  );
  component
    .getInstance()
    ._handleChangeMsg({target: { value: "New msg"}});
  // re-rendering
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})


test('Input field updates on email input', () => {
  const component = renderer.create(
    <Contact />
  );
  component
    .getInstance()
    ._handleChange({target: { value: "New email"}});
  // re-rendering
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Contact from '../src/components/contact';

describe('<Contact/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Contact />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Contact form updates on form input', () => {
  const component = renderer.create(
    <Contact />
  );
  component
    .getInstance()
    ._handleChange({target: { value: "newemail@testmail.com"}})

  component
    .getInstance()
    ._handleChangeMsg({target: { value: "I am a new message"}});

  // re-rendering
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

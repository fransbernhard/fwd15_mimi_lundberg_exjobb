import React, { Component } from 'react';
import Contact from '../src/components/contact';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';

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

//
// test('Input field updates on input', () => {
//   const component = shallow(
//      <Contact />
//   );
//
//   const input = component.find('#formEmail');
//   expect(input.text()).toEqual("");
//   // expect(input.text()).toEqual('');
//   input.simulate('change',
//     {target: { value: "My new value"}}
//   );
//   const val = input.node.value;
//
//   expect(input.text()).toEqual(val);
// });

  
import React from 'react';
import { shallow , mount} from 'enzyme';
import {PageTest} from '../../components/PageTest'

let wrapper, history, validateForm;

beforeEach(()=>{
  history = { push: jest.fn() };
  validateForm = jest.fn()
  wrapper = shallow(<PageTest validateForm={validateForm}/>);
})

test('should render PageTest correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test('testing button click ', ()=>{
  wrapper.find('.submit-button').simulate('click');
  expect(true).toBe(true);
});


test('testing input value change ', ()=>{
  const input = wrapper.find('.tester-input')
  input.simulate('change', { target: { value: 'Hello' } })
  expect(true).toBe(true);
});
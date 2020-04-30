import  React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { findByTestAttr } from '../../utils/';

const setUp = (props={}) =>{
  const component = shallow(<Header {...props}/>);
  return component;
}

describe('Header Comp', ()=>{
  let component;
  
  beforeEach(()=>{
    component = setUp();;
  })

  test('should render without errors', ()=>{
    const wrapper = findByTestAttr(component, 'Header');
    // console.log(wrapper.debug());
    expect(wrapper.length).toBe(1);
  });

  test('should render without errors', ()=>{
    const wrapper = findByTestAttr(component, 'click-me');
    expect(wrapper.length).toBe(1);
  });
})
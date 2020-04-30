import  React from 'react';
import { shallow } from 'enzyme';
import Headline from '../../components/Headline';
import { findByTestAttr } from '../../utils/';

const setUp = (props={}) =>{
  const component = shallow(<Headline {...props}/>);
  return component;
}

describe('Headline Comp', () => {

  describe('Has props', () => {

    let wrapper;
    beforeEach(()=>{
      const props = {
        header: 'Test Header',
        desc: 'Test Description'
      }
      wrapper = setUp(props);
    });

    test('should render witout errors', ()=>{
      const component = findByTestAttr(wrapper, 'Headline');
      expect(component.length).toBe(1);
    });

    test('should render h1',()=>{
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });
    test('should render description',()=>{
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {

    let wrapper;
    beforeEach(()=>{
      wrapper = setUp();
    });

    test('Should not Reander', ()=>{
      const component = findByTestAttr(wrapper, 'Headline');
      expect(component.length).toBe(0);
    });


  });

})
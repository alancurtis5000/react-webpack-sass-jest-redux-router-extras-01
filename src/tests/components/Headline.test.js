import  React from 'react';
import { shallow } from 'enzyme';
import Headline from '../../components/Headline';
import { findByTestAttr, checkProps } from '../../utils/';

const setUp = (props={}) =>{
  const component = shallow(<Headline {...props}/>);
  return component;
}

describe('Headline Comp', () => {

  describe('Check prop-types', ()=>{
    test('Should not throw warning',()=>{
      const expectedProps = {
        header: "Test header",
        desc: "Test desc",
        tempArr: [{
          fName: "Test fName",
          lName: "Test lName",
          email: "Test@email.com",
          age: 33,
          onlineStatus: false,
        }]
      };

      const propsErr =checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();

    });
  })

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
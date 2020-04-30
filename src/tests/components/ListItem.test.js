import React from 'react';
import { findByTestAttr, checkProps } from '../../utils/';
import ListItem from '../../components/ListItem';
import { shallow } from 'enzyme';

describe('ListItem Comp', ()=>{

  describe('Checking PropTypes', ()=>{
   
    test('Should not throw errors', ()=>{
      const expectedProps = {
        title: 'Example Button Text',
        desc: "Example Description"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', ()=>{

    let wrapper;
    beforeEach(()=>{
      const props = {
        title: 'Example Button Text',
        desc: "Example Description"
      };
      wrapper = shallow(<ListItem {...props} /> );
    });
    
    test('Should render without errors', ()=>{
     const component = findByTestAttr(wrapper, 'ListItem');
     expect(component.length).toBe(1);
    });

    test('Should render title', ()=>{
      const title = findByTestAttr(wrapper, 'title');
      expect(title.length).toBe(1);
     });

     test('Should render desc', ()=>{
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
     });
  });

  
  describe('should not render', ()=>{
    let wrapper;
    beforeEach(()=>{
      const props = {
        desc: "Example Description"
      };
      wrapper = shallow(<ListItem {...props} /> );
    });

    test('component should not render', ()=>{
      const component = findByTestAttr(wrapper, 'ListItem');
      expect(component.length).toBe(0);
     });
  });
});
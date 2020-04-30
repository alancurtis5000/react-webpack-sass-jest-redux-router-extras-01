import React from 'react';
import { findByTestAttr, checkProps } from '../../utils/';
import SharedButton from '../../components/SharedButton';
import { shallow } from 'enzyme';

describe('Shared Button Comp', ()=>{

  describe('Checking PropTypes', ()=>{
   
    test('Should not throw errors', ()=>{
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: ()=>{}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', ()=>{

    let wrapper;
    beforeEach(()=>{
      const props = {
        buttonText:"Test Text",
        emitEvent: ()=>{}
      }
      wrapper = shallow(<SharedButton {...props} /> );
    });
    
    test('Should render a button', ()=>{
     const button = findByTestAttr(wrapper, 'SharedButton');
     expect(button.length).toBe(1);
    });

  });

});
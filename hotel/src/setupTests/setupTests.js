import React from 'react';
import { shallow } from 'enzyme';
import Login from '../pages/Login';


describe('login page', function(){
    
    it('render ok ', function(){
       const wrapper= shallow (<Login />);
       expect(wrapper.exists()).toBe(true);
    });

    if('should..' )
  



});

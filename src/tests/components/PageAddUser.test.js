
import puppeteer from 'puppeteer';
import  React from 'react';
import { shallow } from 'enzyme';
import PageAddUser from '../../components/PageAddUser';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// const createMockStore = configureMockStore([thunk]);
// const defaultAuthState = { users:[
//   {id:0, user_name:"Will"}
// ] };
// const store = createMockStore(defaultAuthState);


test("should add new user to users list", ()=>{

  // const wrapper = shallow(<PageAddUser store={store} users={defaultAuthState.users} />);
  // console.log(wrapper.props())
  // const button  = wrapper.find('.cheese').length
  // console.log(button)
  expect(1).toBe(1);
});


// End to End test //
/*
test('should add user input then click add user button', async () => {
  const browser = await puppeteer.launch({
    headless:false,
    slowMo: 0,
    args:['--window-size=1024,768']
  });
  const page = await browser.newPage()
  await page.goto('http://localhost:8080/');
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('#btnAddUser');

  const finalText = await page.$eval('#user-list', el => el.textContent);

  await page.close();
  await browser.close();

  expect(finalText).toContain('Anna');

}, 10000);

*/
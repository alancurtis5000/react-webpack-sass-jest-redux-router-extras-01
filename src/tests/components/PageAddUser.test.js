
import puppeteer from 'puppeteer';
import  { generateGreeting, validateInput, checkAndGenerate }  from '../../helpers/utils';


// Unit tests // testing functions independently.
test('should output greeting with name', ()=>{
  const text = generateGreeting('Max');
  expect(text).toBe("Hello Max!");
});

test('should output validateInput', ()=>{
  const text = validateInput('Max');
  expect(text).toBe(true);

  const noText = validateInput('');
  expect(noText).toBe(false);
});


// Integration test // testing multiple functions together.
test('should generate greeting after validating text', ()=>{
  const text = checkAndGenerate('Max');
  expect(text).toBe("Hello Max!");

  const noText = checkAndGenerate('');
  expect(noText).toBe(false);
});


// End to End test //
test('should add user input then click add user button', async () => {
  const browser = await puppeteer.launch({
    headless:false,
    slowMo: 0,
    args:['--window-size=1920,1080']
  });
  const page = await browser.newPage()
  await page.goto('http://localhost:8080/');
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('#btnAddUser');

  const finalText = await page.$eval('#user-list', el => el.textContent);
  expect(finalText).toContain('Anna');

  await page.close();
  await browser.close();

}, 10000);




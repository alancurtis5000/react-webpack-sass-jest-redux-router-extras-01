
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
// WORKING ON GETTING PUPPETEER TO WORK

// test('the data is peanut butter', async () => {
//   const data = await setTimeout(() => {
//     return 'peanut butter';
//   }, 1000);
//   expect(data).toBe('peanut butter');
// });

// test('should click through app', async()=>{
//   await
//   expect(false).toBe(false);
// });
// test('should click through app', async ()=>{
//   const browser = await puppeteer.launch({
//     headless:false,
//     slowMo: 80,
//     args:['--window-size=1920,1080']
//   });
//   const page = await browser.newPage();
//   await page.goto(
//     'http://localhost:8080/'
//   );
//   expect(true).toBe(true)
// });

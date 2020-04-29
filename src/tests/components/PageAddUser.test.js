
import puppeteer from 'puppeteer';


// End to End test //
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


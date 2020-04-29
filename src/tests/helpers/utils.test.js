// mocking local module.
jest.mock('../../../http');

import  { generateGreeting, validateInput, checkAndGenerate, loadTitle }  from '../../helpers/utils';

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


// Async test
test('should print uppercase title', ()=>{
  loadTitle().then(title => {
    expect(title).toBe("DELECTUS AUT AUTEM");
  })
});
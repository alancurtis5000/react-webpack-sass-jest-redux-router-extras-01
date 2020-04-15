import { 
  errorRequiredField,
  errorRequiredSymbolAt,
  errorRequiredSymbolPeriod,
  isEmail,
  isRequired
 } from '../../helpers/inputValidator';

test('invalid email "aaa", should come back with errors', ()=>{
  const action = isEmail("aaa");
  let expected = [errorRequiredSymbolAt, errorRequiredSymbolPeriod]
  expect(action).toEqual(expected);
});

test('invalid email "aaa.", should come back with errors', ()=>{
  const action = isEmail("aaa.");
  let expected = [errorRequiredSymbolAt]
  expect(action).toEqual(expected);
});

test('invalid email "aaa@", should come back with error', ()=>{
  const action = isEmail("aaa@");
  let expected = [errorRequiredSymbolPeriod]
  expect(action).toEqual(expected);
});

test('invalid email "", should come back with error', ()=>{
  const action = isEmail("");
  let expected = [errorRequiredField]
  expect(action).toEqual(expected);
});

test('valid email "a@g.com", should come pass', ()=>{
  const action = isEmail("a@g.com");
  let expected = []
  expect(action).toEqual(expected);
});

test('required input value is empty, send back error', ()=>{
  const action = isRequired("");
  let expected = [errorRequiredField]
  expect(action).toEqual(expected);
});

test('required input has value, valid', ()=>{
  const action = isRequired("hello");
  let expected = []
  expect(action).toEqual(expected);
});

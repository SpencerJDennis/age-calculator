import Age from './../src/scripts.js';

describe('Age', () => {
  

test('should determine user age depended on userInput', () => {
  let user1 = new Age(82)
  expect(user1.userInput).toEqual(82);
});

test('should return mercuryAge as 341.666666666667', () => {
  let mercuryYear = .24
  let mercuryAge = 82 / mercuryYear;
  expect(mercuryAge).toEqual(341.6666666666667)
});

test('should define mercuryAge function', () => {
  let user1 = new Age(82)
  expect(user1.mercury).toEqual(user1.mercuryAge());
});

test('should test lifeExpectancy function if age is greater than average age', () => {
  let user1 = new Age(82)
  expect(user1.mercuryLife).toEqual(8.333333333333314)
});

test('should test lifeExpectancy function if age is lower than average age', () => {
  let user1 = new Age(78)
  expect(user1.mercuryLife).toEqual(8.333333333333371)
});

test('should return jupiterAge as 6.913996627318719', () => {
  let user1 = new Age(82)
  let jupiterYear = 11.86
  let jupiterAge = 82 / jupiterYear;
  expect(user1.jupiterAge()).toEqual(6.913996627318719)
});

test('should return marsAge as 43.61702127659575', () => {
  let user1 = new Age(82)
  let marsYear = 1.88
  let marsAge = 82 / marsYear;
  expect(user1.marsAge()).toEqual(43.61702127659575)
});

test('should return venusAge as 132.25806451612902', () => {
  let user1 = new Age(82)
  let venusYear = .62
  let venusAge = 82 / venusYear;
  expect(user1.venusAge()).toEqual(132.25806451612902)
});

test('should test jupiterlifeExpectancy function if age is greater than average age', () => {
  let user1 = new Age(82)
  expect(user1.jupiterLife).toEqual(0.16863406408094406)
});

test('should test jupiterlifeExpectancy function if age is lower than average age', () => {
  let user1 = new Age(78)
  expect(user1.jupiterLife).toEqual(0.16863406408094495)
});

test('should test marsLifeExpectancy function if age is greater than average age', () => {
  let user1 = new Age(82)
  expect(user1.marsLife).toEqual(1.0638297872340488)
});

test('should test marsLifeExpectancy function if age is lower than average age', () => {
  let user1 = new Age(78)
  expect(user1.marsLife).toEqual(1.0638297872340416)
});
});
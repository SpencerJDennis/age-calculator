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
  expect(user1.jupiterAge).toEqual(6.913996627318719)
});
});
const isPerfectNumber = require('./isPerfectNumber.js');

describe('is perfect number tests', () => {
    test('28 - true', () => expect(isPerfectNumber(28)).toBeTruthy());
    test('29 - false', () => expect(isPerfectNumber(29)).toBeFalsy());
});
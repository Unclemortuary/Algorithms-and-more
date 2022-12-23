const topM = require('./topMNumbersWithoutDigitsFromBottomM.js');

describe('top m numbers', () => { 
    test('Test Case 1', () => expect(topM([1, 2, 3, 4, 11, 12], 1)).toIncludeSameMembers(['4']));
    test('Test Case 2', () => expect(topM([1, 2, 3, 4, 11, 12, 99], 2)).toIncludeSameMembers(['99', '4']));
    test('Test Case 3', () => expect(topM([1, 2, 3, 4, 11, 12, 99, 205, 400], 3)).toIncludeSameMembers(['400', '99', '4']));
})
const returnSecondMax = require('./secondLargestElement.js');

describe('second largest element', () => {
    test('regular array with all positive numbers, 12 returned', 
        () => expect(returnSecondMax([1, 3, 5, 12, 4, 21, 3, 2])).toBe(12));
    test('regular array with negatove number, 1 returned', 
        () => expect(returnSecondMax([1, -7, 8])).toBe(1));
    test('array with big numbers, 30 returned', 
        () => expect(returnSecondMax([1, 30, 4, 21, 100000])).toBe(30));
});
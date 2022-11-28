const findMaxSubArray = require('./maximumSubArray.js');

describe('find maximum sub array tests', () => {
    // test('regular case: [1,2,5,-7,2,3] - returns [1,2,5]', () => expect(findMaxSubArray([1,2,5,-7,2,3])).toEqual([1,2,5]));
    test('regular case with second sub array: [2,3,-7,1,2,5] - returns [1,2,5]', () => expect(findMaxSubArray([1,2,5,-7,2,3])).toEqual([1,2,5]));
    // test('only one sub array case: [1,2,3] - returns [1,2,3]', () => expect(findMaxSubArray([1,2,3])).toEqual([1,2,3]))
    // tie test
    // boundaries test
    // all negative numbers test
    // [0,0,0,-1,0,0,-1]
    // 
});
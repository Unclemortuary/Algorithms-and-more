const findMaxSubArray = require('./maximumSubArray.js');

describe('find maximum sub array tests', () => {
    test('regular case: [1,2,5,-7,2,3] - returns [1,2,5]', () => expect(findMaxSubArray([1,2,5,-7,2,3])).toEqual([1,2,5]));
    test('regular case with second sub array: [2,3,-7,1,2,5] - returns [1,2,5]', () => expect(findMaxSubArray([2,3,-7,1,2,5])).toEqual([1,2,5]));
    test('only one sub array case: [1,2,3] - returns [1,2,3]', () => expect(findMaxSubArray([1,2,3])).toEqual([1,2,3]));
    test('all negative numbers case: [-7,-3,-5] - returns [-1]', () => expect(findMaxSubArray([-7,-3,-5])).toEqual([-1]));
    test('tie - max length case: [4,2,-1,1,2,3,-1,5,1,-3,6] - returns [1,2,3]', () => expect(findMaxSubArray([4,2,-1,1,2,3,-1,5,1,-3,6])).toEqual([1,2,3]));
    test('tie - max length case: [1,2,3,-1,4,2,-1,5,1,-3,6] - returns [1,2,3]', () => expect(findMaxSubArray([1,2,3,-1,4,2,-1,5,1,-3,6])).toEqual([1,2,3]));
    test('tie - same length case: [1,2,3,-1,3,2,1,-1,2,1,3] - returns [1,2,3]', () => expect(findMaxSubArray([1,2,3,-1,3,2,1,-1,2,1,3])).toEqual([1,2,3]));
    test('zeros case: [0,0,0,-1,0,0,-1] - returns [0,0,0]', () => expect(findMaxSubArray([0,0,0,-1,0,0,-1])).toEqual([0,0,0]));
    // boundaries test
});
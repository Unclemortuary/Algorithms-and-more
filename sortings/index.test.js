const { 
    quickSort, 
    selectionSort } = require('./index.js');

describe('quickSort', () => {
    test('unordered array gets ordered', () => {
        const input = [9,8,7,6,5,4,3,2];
        const expected = [2,3,4,5,6,7,8,9];
        expect(quickSort(input)).toEqual(expected);
    });

    test('all the same elements', () => {
        const input = [5,5,5,5];
        const expected = [5,5,5,5];
        expect(quickSort(input)).toEqual(expected);
    });

    test('non array input, throws error', () => 
        expect(() => 
            { quickSort('12314eqw') })
            .toThrow()
    );
});
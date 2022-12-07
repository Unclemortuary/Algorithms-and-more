const isValidParentheses = require('./validParentheses.js');

describe('valid parentheses tests', () => { 
    test('regular case () - valid', () => expect(isValidParentheses('()')).toBeTruthy());
    test('starts from closed )[][] - invalid', () => expect(isValidParentheses(')[][]')).toBeFalsy());
    test('unclosed bracket ([]{} - invalid', () => expect(isValidParentheses('([]{}')).toBeFalsy());
    test('closed in proper order ([({})]) - valid', () => expect(isValidParentheses('([({})])')).toBeTruthy());
    test('closed in improper order ([({}]]) - invalid', () => expect(isValidParentheses('([({}]])')).toBeFalsy());
});
const generateParenthesis = require('./generateParenthesis.js');

describe('generate parenthesis', () => { 
    test('n = 1', () => expect(generateParenthesis(1)).toEqual(['()']));
    test('n = 2', () => expect(generateParenthesis(2)).toIncludeSameMembers(['(())', '()()']));
    test('n = 3', () => expect(generateParenthesis(3)).toIncludeSameMembers(['((()))', '(()())', '(())()', '()(())', '()()()']));
});
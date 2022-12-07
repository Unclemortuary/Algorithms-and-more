/*
    Given a string s containing just a characters '(', '[', '{', ')', ']', and '}', determine if the input string is valid
    An input string is valid if:
    1. Open brackets must be closed by the same type of brackets
    2. Open brackets must be closed in correct order

    Examples:
    Input: s = '()'
    Output: valid

    Input: s = '()[]{}'
    Output: valid

    Input: s = '(]'
    Output: invalid

    Input: s = '([)]'
    Output: invalid
*/

function isValidParentheses(s) {
    const bracketTypesMap = {
        '(': 1, ')': 1,
        '[': 2, ']': 2,
        '{': 3, '}': 3
    };

    const openedBracketsOrder = [];

    const isCloseBracket = bracket =>  bracket === ')' || bracket === ']' || bracket === '}';

    let result = true;

    for (const bracket of s) {
        if (isCloseBracket(bracket)) {
            const lastOpenBracketType = openedBracketsOrder.pop();
            console.log(lastOpenBracketType);
            if (lastOpenBracketType === undefined || lastOpenBracketType !== bracketTypesMap[bracket]) {
                result = false;
                break;
            }
        } else {
            openedBracketsOrder.push(bracketTypesMap[bracket]);
        }
    };

    return result && openedBracketsOrder.length === 0;
};

module.exports = isValidParentheses;
/*
    Given n pairs of parenthesis, write a function to generate all combinations of well-formed parentheses

    Examples:
    Input: n = 3
    Output: ['((()))', '(()())', '(())()', '()(())', '()()()']

    Input: n = 1
    Output: ['()']
*/
function generateParenthesis(n) {
    let result = ['()'];

    if (n === 1) { return result };

    for (let i = 1; i < n; i++) {
        const copy = [...result];
        const previousIterationAmount = copy.length;
        result.forEach(bracketCombination => {
            copy.push(wrap(bracketCombination));
            copy.push(...addBracketsOnBothSides(bracketCombination));
        });
        const noDuplicates = new Set(copy.slice(previousIterationAmount));
        console.log(noDuplicates);
        result = [...noDuplicates];
    }

    return result;
};

const wrap = bracketCombination => `(${bracketCombination})`;

const addBracketsOnBothSides = bracketCombination => [`()${bracketCombination}`, `${bracketCombination}()`];

module.exports = generateParenthesis;
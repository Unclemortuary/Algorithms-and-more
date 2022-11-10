// A palindromic string is a string (in some base) that is the same when
// written forwards or backwards.
// Check if given string is a palindrome or not. If the string is palindrome
// return "Yes" or if it's not return "No".

// Example:
// Input: "xox"
// Output: "Yes"

// Constraint:
// Assume that all the characters in the given string are lowercase

const isPalindrom = function(str) {
    if (typeof(str) !== 'string' || str === '') {
        return 'No';
    }

    // Advanced case for phrases
    if (str.includes(' ')) {
        str = str.split(' ').reduce((previous, current) => previous + current);
    }

    const middleCharPosition = Math.trunc(str.length / 2);
    const oddLengthOffset = str.length % 2 === 1 ? 1 : 0;

    const firstPart = str.substring(0, middleCharPosition);
    const secondPart = str.substring(middleCharPosition + oddLengthOffset);

    let secondPartReversed = '';
    for (let index = secondPart.length - 1; index >= 0; index--) {
        secondPartReversed += secondPart.at(index);
    }

    return secondPartReversed === firstPart ? 'Yes' : 'No';
};

module.exports = isPalindrom;
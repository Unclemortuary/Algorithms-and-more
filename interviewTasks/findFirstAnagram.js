/*
    Given an array of strings
    Write a function that returns first entrance of a string which has an anagram

    Examples:
    findAnagram(['abc', 'cba', 'wer', 'rew']) -> 'abc'
    findAnagram(['qwerty', 'cba', 'wer', 'rew']) -> 'wer'

    Complexity should be linear - O(n)
*/
function findFirstAnagram(arr) {
    const map = new Map();
    let result = null;

    for (const str of arr) {
        const normalizedIntKey = normalizeString(str);
        if(map.has(normalizedIntKey)) {
            result = map.get(normalizedIntKey);
            break;
        } else {
            map.set(normalizedIntKey, str);
        }
    }

    return result;

    function normalizeString(str) {
        let result = null;
        for (const char of str) {
            result += char.charCodeAt(0);
        }
        return result;
    }
};

module.exports = findFirstAnagram;
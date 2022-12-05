const findFirstAnagram = require("./findFirstAnagram.js");

describe("find first anagram tests", () => {
    test("regular case ['abc', 'cba', 'edf', 'fde'] - 'abc", () => expect(findFirstAnagram(['abc', 'cba', 'edf', 'fde'])).toEqual('abc'));
    test("case with anagram at the end ['abc', 'qwe', 'edf', 'fde'] - 'edf", () => expect(findFirstAnagram(['abc', 'qwe', 'edf', 'fde'])).toEqual('edf'));
});
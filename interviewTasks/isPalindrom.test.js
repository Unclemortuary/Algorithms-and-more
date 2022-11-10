const isPalindrom = require('./isPalindrom.js');

describe('isPalindrom tests', () => {
    test("input is not string - 'No' returned", () => expect(isPalindrom(12314)).toBe('No'));
    test("empty string - 'No' returned", () => expect(isPalindrom('')).toBe('No'));
    test("string is not polindrom - 'No' returned", () => expect(isPalindrom('something')).toBe('No'));
    test("palindrom which lenght is even - 'Yes' returned", () => expect(isPalindrom('anna')).toBe('Yes'));
    test("palindrom which lenght is odd - 'Yes' returned", () => expect(isPalindrom('rotor')).toBe('Yes'));
    // Advanced
    test("palindrom phrase - 'Yes' returned", () => expect(isPalindrom('top spot')).toBe('Yes'));
});
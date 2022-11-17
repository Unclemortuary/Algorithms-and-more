/* Check if the given number a perfect or not
    A perfect number is a positive integer that is equal to the sum of its proper positive divisors
    Example: 28 - divisors: 1 2 4 7 14 28
    Sum of divisors = 28
*/

function isPerfectNumber(num) {
    let sum = 0;
    for (let potentialDivisor = 1; potentialDivisor <= num/2; potentialDivisor++) {
        if (num % potentialDivisor === 0) {
            sum += potentialDivisor;
        }
    }
    return sum === num;
};
module.exports = isPerfectNumber;
/* Write a function that returns second largest element in a list
    Example
    Input: [1, 3, 5, 12, 4, 21, 3, 2]
    Output: 12
    Input: [1, -7, 8]
    Output: 1

    Constraint:
    1 <= length of the input list (nums) <= 100
*/

function returnSecondMax(nums) {
    nums.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    nums.pop();
    return nums.pop();
};

module.exports = returnSecondMax;
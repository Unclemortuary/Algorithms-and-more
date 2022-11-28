/*
    Find out the maximum sub-array of non negative numbers from an array.

    The sub-array should be contiguous i.e., a sub-array created by choosing the second and fourth element and skipping the third element is invalid.

    Maximum sub-array is defined in terms of the sum of the elements in the sub-array. Sub-array A is greater than sub-array B if sum(A) > sum(B).

    Example:
    a = [1, 2, 5, -7, 2, 3]
    The two sub-arrays are [1, 2, 5] [2, 3].
    The answer is [1, 2, 5] as its sum is larger than [2, 3]

    NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length.
    If there is still a tie, then return the segment with minimum starting index.
    If no such subarray is present return "-1"

    Expected Time Complexity: O(N)
    Expected Auxiliary Space: O(1)

    Constraints:
    1 ≤ N ≤ 10^5
    -10^5 ≤ A[i] ≤ 10^5
*/

function findMaxSubArray(array) {
    const noAnswer = [-1];

    if(typeof(array) !== "object" && array.length === 0) { return noAnswer; }

    const subArrays = new Map();
    let subArraySum = 0;
    let tempSubArray = [];
    let hasSameValues = false;

    array.forEach((item, index) => {
        if (item >= 0) {
            tempSubArray.push(item);
            subArraySum += item;
            if (index === array.length - 1) {
                
            }
        } else {
            if (subArrays.has(subArraySum.toString())) {
                subArraySum = subArraySum + `_${index}`;
                hasSameValues = true;
            }
            subArrays.set(subArraySum.toString(), Array.from(tempSubArray));
            tempSubArray = [];
            subArraySum = 0;
        }
    });

    if (subArrays.size === 0) { return noAnswer; }

    let max = null;
    for (const [key, value] of subArrays) {
        const intKey = parseInt(key.split('_')[0], 10);
        if (intKey > max) {
            max = intKey;
        }
    }

    return subArrays.get(max.toString());
};

findMaxSubArray([1,2,3]);

module.exports = findMaxSubArray;
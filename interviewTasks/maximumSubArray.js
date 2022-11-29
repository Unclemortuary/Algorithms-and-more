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
    let tieCasePostfix = 0;

    array.forEach((item, index) => {
        const needToPush = item < 0 || index === array.length - 1;

        if (item >= 0) {
            tempSubArray.push(item);
            subArraySum += item;
        }
        if (needToPush && tempSubArray.length > 0) {
            if (subArrays.has(subArraySum.toString())) {
                subArraySum = subArraySum + `_${tieCasePostfix}`;
                tieCasePostfix++;
            }
            subArrays.set(subArraySum.toString(), Array.from(tempSubArray));
            tempSubArray = [];
            subArraySum = 0;
        }
    });

    if (subArrays.size === 0) { return noAnswer; }

    let max = 0;
    for (const [key, value] of subArrays) {
        const intKey = parseInt(key.split('_')[0], 10);
        if (intKey > max) {
            max = intKey;
        }
    }

    const tieCase = subArrays.has(`${max}_0`);

    if (tieCase) {
        let lengths = [];
        let maxLength = 0;
        const firstSequenceLength = subArrays.get(max.toString()).length;

        for (let index = 0; index < tieCasePostfix; index++) {
            const key = `${max}_${index}`;
            const subArray = subArrays.get(key);
            lengths.push(subArray.length);
            maxLength = maxLength < subArray.length ? subArray.length : maxLength;
        }

        if (firstSequenceLength >= maxLength) {
            return subArrays.get(max.toString());
        }

        if (lengths.filter(length => length === maxLength).length === 1) {
            return subArrays.get(`${max}_${lengths.findIndex(v => v === maxLength)}`);
        }
    } else {
        return subArrays.get(max.toString());
    }
};

module.exports = findMaxSubArray;
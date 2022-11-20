// todo: refactor
const quickSort = function(items, depth) {

    // RECURSIVE
    // 0. If there is only 1 item in a input list - return this item
    // 1. Select a pivot item (usually the middle of a list, in this implementation - last element)
    // 2. Iterate through a list and if iteration item less than the pivot - add it to left collection
    //    if greater - to right collection
    // 3. Repeat the algorithm for left and right sequences
    // 4. Merge left and right sequences
//  __________________________________________________________________________________________________
    inputArrayValidation(items);
    if (items.length <= 1) {
        // 0
        return items.pop();
    }
    // 1
    const pivot = items.pop();
    const leftSubSequence = [];
    const rightSubSequence = [];
    // 2
    items.forEach(el => {
        if (el <= pivot) {
            leftSubSequence.push(el);
        }
        else {
            rightSubSequence.push(el);
        }
    });
    const iterationResult = [];
    if (leftSubSequence.length > 0) {
        // 3
        const lowest = quickSort(leftSubSequence, depth + 1);
        // 4
        iterationResult.unshift(lowest);
    }
    // 4
    iterationResult.push(pivot);
    if (rightSubSequence.length > 0) {
        // 3
        const greatest = quickSort(rightSubSequence, depth + 1);
        // 4
        iterationResult.push(greatest);
    }

    return iterationResult.flat(depth);
};


const selectionSort = function(items) {

    // 1. Take the first element and iterate through a list with purpose to find lower element
    // 2. If there is a lower element - swap it with the first
    // 3. Repeat the algorithm for next element until the LAST BUT ONE element

    /* Operations count estimation
        validation = 1
        for first loop:
            first loop runs n-1 times. In every iteration there is 2 + 1 + 1 + swap (1 + 1 + 1 + 1) = 8 operations
        for second loop:
            second loop runs n-1 then n-2 then ... 2 then 1 times. I.e. it runs (n^2-n)/2 times. Each iteration has 2 + 1 + 1 + 1 = 5 operations
            in worst scenario (if statement executes every iteration)
        final formula = 1 + 8n - 8 + 5 * (n^2 - n)/2 = 8n - 7 + 2.5n^2 - 2.5n = 2.5n^2 - 5.5n - 7;

        for 4 elements in worst case this algorithm executes 2.5 * 16 - 5.5 * 4 - 7 = 11 operations
    */
//  __________________________________________________________________________________________
    inputArrayValidation(items);

    for (let current = 0; current < items.length - 1; current++) {
        // 1
        let smallest = items[current];
        let smallestIndex = current;
        for (let index = current + 1; index <= items.length - 1; index++) {
            // 1
            if (items[index] < smallest) {
                smallest = items[index];
                smallestIndex = index;
            }
        }
        // 2
        swapItems(current, smallestIndex);
    }

    function swapItems (firstIndex, secondIndex) {
        if (firstIndex === secondIndex) { return; }
        const temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    };
};

const inputArrayValidation = input => {
    if (!Array.isArray(input)) {
        throw new Error('Argument provided is not an array');
    }
};

module.exports = {
    quickSort,
    selectionSort
};
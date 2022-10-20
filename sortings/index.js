const quickSort = function(items, depth){
    if (Array.isArray(items)) {
        if (items.length <= 1) {
            return items.pop();
        }
        const pivot = items.pop();
        const leftSubSequence = [];
        const rightSubSequence = [];
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
            const lowest = quickSort(leftSubSequence, depth + 1);
            iterationResult.unshift(lowest);
        }
        iterationResult.push(pivot);
        if (rightSubSequence.length > 0) {
            const greatest = quickSort(rightSubSequence, depth + 1);
            iterationResult.push(greatest);
        }
        console.log(depth);
        return iterationResult.flat(depth);
    }
    else {
        throw new Error('Argument provided is not an array');
    }
};

console.log(quickSort([3,7,8,5,2,1,9,5,4], 1));
// Return the second-largest element of an array.

function findSecondLargest(array) {
    let largest = array[0];
    let secondLargest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
        if (array[i] > secondLargest && array[i] != largest) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

console.log(findSecondLargest([11, 2, 4, 13, 8, 9, 10]))
// Nth-Largest
// Given an array, return the Nth-largest element: there 
// should be (N - 1) elements that are larger.

// loop for array
// loop for counting

function nthLargest(array, n) {
    let largest = 0;
    let nextLargest = 0;

    // find the largest
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    for (let j = 1; j <= n - 1; j++) {
        nextLargest = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > nextLargest && array[i] < largest) {
                nextLargest = array[i];
            }
        }
        largest = nextLargest;


    }
    return nextLargest;
}

console.log(nthLargest([11, 2, 4, 13, 8, 9, 10], 5))


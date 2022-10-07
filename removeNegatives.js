// Implement a function ​removeNegatives()​ that accepts an array and removes
// any values that are less than zero.
// Second-level challenge: ​don’t use nested loops.

function removeNegatives(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeNegatives([-1, 2, 6, -7, 9, 10, 11]));
// Nth-to-Last
// Return the element that is N-from-array’s-end.

function nthToLast(array, n) {
    return array[array.length - n];
}
console.log(nthToLast([1, 2, 3, 4, 5], 3));
console.log(nthToLast(["do", "re", "mi", "fa", "so", "la", "ti", "do"], 5));
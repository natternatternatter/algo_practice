// Given a sorted array and a value, return whether that value is present 
// in the array. Do not sequentially iterate the entire array. Instead, ‘divide and conquer’, 
// taking advantage of the fact that the array is sorted.

function binarySearch(array, value) {
    let endIndex = array.length - 1;
    let startIndex = 0;
    let middleIndex = Math.ceil((startIndex + endIndex) / 2);
    let count = 0;
    while (startIndex <= endIndex) {
        count++;
        console.log("count: ", count);
        console.log("startIndex: ", startIndex);
        console.log("middleIndex: ", middleIndex);
        console.log("endIndex: ", endIndex);

        if (value == array[middleIndex]) {
            return true;
        }
        if (value > array[middleIndex]) {
            startIndex = middleIndex + 1;
            middleIndex = (startIndex + endIndex) / 2;
        }
        if (value < array[middleIndex]) {
            endIndex = middleIndex - 1;
            middleIndex = (startIndex + endIndex) / 2;
        }
    }
    return false;

}

console.log(binarySearch([1, 12, 33, 40, 57, 61, 77], 77));
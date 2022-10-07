// PushFront
// Given an array and an additional value, ​insert this value ​at the beginning of the array. 
// Do this without using any built-in array methods.

function pushFront(arr, num) {
    let newArr = [num];
    for (number in arr) {
        newArr.push(number);
    }
    return newArr;
}

// console.log(pushFront([1, 2, 3, 4, 5], 15));

// PopFront
// Given an array, ​remove and return the value ​at the beginning of the array. 
// Do this without using any built-in array methods except ​pop()​.

function popFront(arr) {
    let num = arr.pop();
    return pushFront(arr, num);
}

console.log(popFront([1, 2, 3, 4, 5]))

//without a new array

// function pushFront2(arr, num) {
//     for(let i = 0; i<arr.length; i++) {
//         let placeHolder = arr[i];
//         arr[i] = num
//         arr.push(placeHolder);
//         arr[i] = num
//     }
// }

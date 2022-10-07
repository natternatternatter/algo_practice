// Given an array, index, and additional value, ​insert the value into the array
// a​t the given index. Do this without using built-in array methods. You can think 
// of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.

function insertAt(array, index, number) {
    let newArray = [];
    for (let i = 0; i < index; i++) {
        newArray.push(array[i]);
    }
    newArray.push(number);
    for (let i = index; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(insertAt([1, 2, 3, 4, 5], 2, 99));


// RemoveAt
// Given an array and an index into the array, remove and return the array value 
// ​at that index. Do this without using any built-in array methods except ​pop()​. 
// Think of ​PopFront(arr)​ as equivalent to ​RemoveAt(arr,0).​



function removeAt(array, index) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (i == index) {
            return array[i];
        }
        else array.pop(i);
    }
}

console.log(removeAt([1, 2, 3, 4, 5], 2))
// Implement ​rotateArr(arr, shiftBy)​ that accepts array and offset.
// Shift arr’s values ​to the right​ by that amount. ‘Wrap-around’ any 
// values that shift off array’s end to the other side, so that no data 
// is lost. Operate in-place: given ([1,2,3],1)​, change the array to [​ 3,1,2]​.
// [6, 5, 9, 10, 3]

//Positive numbers only

function rotateArray(array, shiftBy) {

    let counter = 0;
    console.log("counter will not go above ", shiftBy);
    while (counter < shiftBy) {
        console.log("counter is ", counter);
        let placeHolder = array[0];
        let placeHolder2;

        for (let i = 1; i < array.length; i++) {
            placeHolder2 = array[i];
            array[i] = placeHolder;
            placeHolder = placeHolder2;
        }
        array[0] = placeHolder;
        counter++;

    }
    return array;
}

console.log(rotateArray([6, 5, 9, 10, 3], 2));
console.log(rotateArray([6, 5, 9, 10, 3], 3));
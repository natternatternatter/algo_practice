// Min Of Sorted-Rotated
// You will be given a numerical array that has first been sorted, 
// then rotated by an unknown amount. Find and return the minimum value in that array.


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

function minOfSortedRotated(array) {
    array.sort();
    rotateArray(array, (Math.floor(Math.random() * 100)));

    console.log(array);

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return array[i];
        }
    }
    return array[0];
}

console.log(minOfSortedRotated([5, 4, 13, 9, 12, 6, 7, 29]))
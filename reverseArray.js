
// Given a numerical array, reverse the order of the values. 
// The reversed array should have the same length, with existing 
// elements moved to other indices so that the order of elements is reversed.

function reverseArray(array) {
    let counter = 0;
    let halfway = (Math.floor(array.length / 2))
    console.log("halfway is: ", halfway);
    for (let i = 0, j = array.length - 1; i < array.length && j > 0; i++, j--) {
        if (counter < halfway) {
            counter++;
            let placeholder = array[i];
            console.log(placeholder);
            array[i] = array[j];
            array[j] = placeholder;
            console.log("count is: ", counter);
        } else {
            break;
        }
    }
    return array;
}

console.log(reverseArray([7, 2, 8, 14, 33, 9]))

        //     if ((array.length % 2 != 0) && i == j) {
        //         break;
        //     } else {
        //         let placeholder = array[i];
        //         array[i] = array[j];
        //         array[j] = placeholder;
        //     }
        // }
        // return array;
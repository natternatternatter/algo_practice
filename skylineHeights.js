// You are given an array with heights of consecutive buildings in the city.
// For example, ​[-1,7,3]​ would represent three buildings: first is actually 
// below street level, second is seven stories high, and third is three 
// stories high (but hidden behind the seven-story one). You are situated at 
// street level. Return an array containing heights of the buildings you can see, 
// in order. Given ​[1,-1,7,3]​ return ​[1,7]​.

//take out all negatives
//if the next one is less than, take it out.

//if i< i-1 || i<0

function skylineHeights(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            continue;
        }
        if (array[i] < array[i - 1]) {
            continue;
        }
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(skylineHeights([-1, 1, 7, 5]));
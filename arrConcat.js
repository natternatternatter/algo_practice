// arrConcat
// Replicate JavaScript’s ​concat()​. Create a standalone function 
// that accepts two arrays. Return a ​new​ array containing the first 
// array’s elements, followed by the second array’s elements. Do not 
// alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] )​ should return ​['a','b',1,2]​.

function arrConcat(array1, array2) {
    let newArray = [];

    for (item of array1) {
        newArray.push(item);
    }
    for (item of array2) {
        newArray.push(item);
    }

    return newArray;
}

console.log(arrConcat(['a', 'b'], [1, 2]))
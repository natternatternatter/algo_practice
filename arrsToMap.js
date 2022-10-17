// Arrs2Map
// Given two arrays, create an associative array (map) 
// containing keys of the first, and values of the second. 
// For ​arr1 = ["abc", 3, "yo"]​ and ​arr2 = [42, "wassup", true]​, 
// return ​{"abc": 42, 3: "wassup", "yo": true}​.

function arrsToMap(array1, array2) {
    let newMap = {};
    for (let i = 0, j = 0; i < array1.length && j < array2.length; i++, j++) {
        newMap[array1[i]] = array2[j];
    }
    return newMap;
}

console.log(arrsToMap(["abc", 3, "yo"], [42, "wassup", true]))


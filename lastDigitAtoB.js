// Implement a function that accepts two non-negative integers as arguments. 
// Function ​lastDigitAtoB(a, b)​ should return the last digit of the first 
// number (a) raised to an exponent of the second number (b).
// Examples: given ​(3, 4)​, you should return ​1​ (the last digit of 81: 3 * 3 * 3 * 3). 
// Given ​(12, 5)​, return 2​ (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).



function numToString(num) {
    var stringArray = Array.from(String(num)); //converts a number to an array of string numbers
    var numberArray = [];
    for (var i = 0; i < stringArray.length; i++) { //converts an array of string numbers to an array of numbers
        numberArray.push(parseInt(stringArray[i]));
    }
    return numberArray;
}

function lastDigitAtoB(a, b) {
    var expoProduct = Math.pow(a, b);
    var epArray = numToString(expoProduct);
    var lastDigit = epArray[epArray.length-1];
    return lastDigit;
}

console.log(lastDigitAtoB(12, 5));
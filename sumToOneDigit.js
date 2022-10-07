// Implement a function ​sumToOne(num)​ that, given a number, 
// sums that number’s digits repeatedly until the sum is only one digit. 
// Return that final one digit result.

function numToString(num) {
    var stringArray = Array.from(String(num)); //converts a number to an array of string numbers
    var numberArray = [];
    for (var i = 0; i < stringArray.length; i++) { //converts an array of string numbers to an array of numbers
        numberArray.push(parseInt(stringArray[i]));
    }
    return numberArray;
}

function sumToOne(num) {
    var number = num;
    var array = numToString(number);
    var sum = 0;

    if (array.length > 1) {
        for (var j = 0; j < array.length; j++) {
            sum += array[j];
        }

    array = numToString(sum);

    }
    
    return sum;
}

console.log(sumToOne(123456));

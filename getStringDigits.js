// Get String Digits
// Create a JavaScript function that given a string, returns the 
// integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0"​, 
// the function should return the number 1,357,924,680.

function getStringDigits(string) {
    let numberArray = [];
    let count = 0;
    let array = string.split("");

    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            break;
        } else {
            count++;
        }
    }
    for (i = count; i < array.length; i++) {
        if (array[i] >= 0) {
            numberArray.push(array[i]);
        }
    }

    return numberArray.join("");

}

console.log(getStringDigits("000s01a30y5w7h9a2t4?6!8?0"));


// Remove Blanks
// Create a function that, given a string, returns the string, 
// without blanks. Given ​" play that Funky Music "​, returns a string 
// containing ​"playthatFunkyMusic"​.

function removeBlanks(string) {
    let array = string.split(" ");
    console.log(array);
    let newArray = array.join("");
    console.log(newArray);
    return newArray;
}

console.log(removeBlanks("play that Funky Music"))
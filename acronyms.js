// Acronyms
// Create a function that, given a string, returns the string’s acronym 
// (first letters only, capitalized). Given "there's no free lunch - gotta 
// pay yer way"​, return ​"TNFL-GPYW"​. Given ​"Live from New York, it's Saturday Night!"​, 
// return ​"LFNYISN"​.

//split
//index 0 of each part
//put in new array
//join

function toAcronym(string) {
    let newArray = [];
    let splitArray = string.split(" ");
    console.log(splitArray);
    for (let word of splitArray) {
        newArray.push(word[0]);
    }
    console.log(newArray)
    let acronym = newArray.join("");
    console.log(acronym.toUpperCase())
    return acronym.toUpperCase()
}

console.log("Here's the acronym: ", toAcronym("Live from New York, it's Saturday Night!"));
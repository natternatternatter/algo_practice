// Parens Valid
// Create a function that, given an input string, returns a 
// boolean whether parentheses in that string are valid. Given 
// input ​"y(3(p)p(3)r)s"​, return true. Given ​"n(0(p)3"​, return ​false​. 
// Given ​"n)0(t(0)k"​, return ​false​.

//isolate the parenthesis using split, pushing to new array, and joining
//run from both sides of new array, looking for a paren match(from right ")", from left "("), 
//keep count of matches
//match count should be even

function parensValid(string) {
    let newArray = [];
    let splitArray = string.split("");
    console.log(splitArray);

    //isolate the parenthesis
    for (let char of splitArray) {
        if (char == "(" || char == ")") {
            newArray.push(char);
        }
    }
    console.log(newArray);

    //algorithm to count up parenthesis pairs
    let leftCount = 0;
    let rightCount = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] == "(") {
            leftCount++;
        } else {
            rightCount++;
        }
    }
    console.log("left count: ", leftCount);
    console.log("right count: ", rightCount);

    if ()
}

parensValid("((()()))");
// Implement the Fibonacci function, a famous mathematical equation 
// that generates a numerical sequence such that each number is the 
// sum of the previous two. The Fibonacci numbers at index 0 and 1, coincidentally, have values of 0 and 1. 
// Your function should accept an argument of which Fibonacci number.
// Examples: ​fibonacci(2)​ = 1, ​fibonacci(3)​ = 2, ​fibonacci(4)​ = 3, ​fibonacci(5)​ = 5, etc.

function fibonacci(num) {
    var goldenRatio = 1.618034;
    var numExponent = Math.pow(goldenRatio, num);
    var sqrt5 = Math.sqrt(5);
    var xN = ((numExponent - (Math.pow((1 - goldenRatio), 6))) / sqrt5);

    return (Math.round(xN))
}

console.log(fibonacci(6));



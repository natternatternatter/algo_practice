// Tricky Tribonacci
// Why stop with fibonacci? Create a function to 
// retrieve a “tribonacci” number, from the sum of the previous ​3​. 
// Tribonaccis are {0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, ...}. 
// Again, use a time-space tradeoff to make this fast.

function trickyTribonacci(num) {

    let current;
    let oneBefore = 1;
    let twoBefore = 0;
    let threeBefore = 0;

    for (let i = 2; i < num; i++) {
        current = oneBefore + twoBefore + threeBefore;
        threeBefore = twoBefore;
        twoBefore = oneBefore;
        oneBefore = current;
    }

    return current;

}

console.log(trickyTribonacci(7));

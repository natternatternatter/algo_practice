// Implement a function ​sigma(num)​ that, given a number, 
// returns the sum of all positive integers from 1 up to number (inclusive). 
// Ex.: ​sigma(3) = 6 (or 1+2+3); ​sigma(5)​ = 15 (or 1+2+3+4+5).


function sigma(num) {
    var total = 0;
    for(var i = 0; i<=num; i++) {
        total += i;
    }
    return total;
}

console.log (sigma(15));
console.log (sigma(5));
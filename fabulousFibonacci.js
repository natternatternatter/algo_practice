// Fabulous Fibonacci
// Use a time-space tradeoff to accelerate the average running 
// time of an iFibonacci(num) function that returns the ‘num’th number 
// in the Fibonacci sequence. Recall: fib(0) = 0, fib(1) = 1, fib(2) = 1, fib(3) = 2.

function fabulousFibonacci(num) {

    let current;
    let oneBefore = 1;
    let twoBefore = 0;

    for (let i = 1; i < num; i++) {
        current = oneBefore + twoBefore;
        twoBefore = oneBefore;
        oneBefore = current;
    }

    return current;

}

console.log(fabulousFibonacci(8));

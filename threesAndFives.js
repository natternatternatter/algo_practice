// Create function ​ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value 
// is evenly divisible by 3 or 5 ​but not both​. Display the final sum in the console.
// Second:​ Change your function to make a ​BetterThreesFives(start,end)​where ​start​ and ​
// end values are customizable. You can think of the above ​ThreesFives()​ function as BetterThreesFives(100,4000000)​.

function threesFives() {
    var total = 0;
    for(var i = 100; i <= 4000000; i++) {
        total += i;
    }
    if(((total % 3 == 0) && (total % 5 != 0)) || ((total % 3 != 0) && (total % 5 == 0))) {
        console.log(total);
    }
    else {
        console.log("bummer");
    }
}

threesFives();

function betterThreesFives(start, end) {
    var total = 0;
    for(var i = start; i <= end; i++) {
        total += i;
    }
    if(((total % 3 == 0) && (total % 5 != 0)) || ((total % 3 != 0) && (total % 5 == 0))) {
        console.log(total);
    }
    else {
        console.log("bummer");
    }
}

betterThreesFives(1, 100);
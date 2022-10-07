// Implement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents,
// and computes how to represent that amount with the smallest number of coins.
// Console.log the result.

function generateCoinChange(cents) {
    cents *= 100;
    var quarters = Math.floor(cents / 25);
    var remainder = Math.floor(cents % 25);
    var dimes = Math.floor(remainder / 10);
    var remainder = Math.floor(remainder % 10);
    var nickels = Math.floor(remainder / 5);
    var remainder = Math.floor(remainder % 5);
    var pennies = Math.floor(remainder / 1);

    return (console.log(quarters + " quarter(s),", dimes + " dime(s),", nickels + " nickel(s) and", pennies + " pennie(s)!"));
}

(generateCoinChange(.89));
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. 
// Roll a pair of these dice, tracking the statistics until doubles are rolled.
// Display the​ number of rolls​,​ min,​ ​max,​ and ​average​.

function diceRoll(min, max) {
    var roll = Math.floor(Math.random()*(max-min + 1)+min);
    return roll;
}

function diceStats(min, max) {
    var roll1 = diceRoll(min, max);
    var roll2 = diceRoll(min, max);
    console.log(roll1);
    console.log(roll2);
    var rollCount = 0;
    var rollProduct = 0;

    while (roll1 != roll2) {
        roll1 = diceRoll(1, 6);
        roll2 = diceRoll(1, 6);
        rollCount += 2;
        rollProduct += (roll1 + roll2);
    }
    console.log ("rolling is done");
    var averageRoll = Math.floor(rollProduct / rollCount);

    console.log ("Dice Range: " + min + "-" + max);
    console.log (rollCount + " rolls until a match.");
    console.log ("Average roll: " + averageRoll);
}

diceStats(1, 6);
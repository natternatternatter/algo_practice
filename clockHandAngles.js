// Create function ​clockHandAngles(seconds)​ that, given the number of seconds 
// since 12:00:00, will print the angles (in degrees) of the hour, minute and 
// second hands. As a quick review, there are 360 degrees in a full arc rotation. 
// Treat “straight-up” 12:00:00 as 0 degrees for all hands.




function hoursMinutesSeconds(seconds) {
    var hour = Math.round(seconds/3600);
    var minute = Math.round((seconds % 3600) / 60);
    var second = Math.round(((seconds % 3600) % 60) / 1);
    console.log(hour + " hour(s)", minute + " minute(s)", second + " second(s)");

    var secondsObject = {
        hours: hour,
        minutes: minute,
        seconds: second
    };

    return secondsObject;
}

function clockHandAngles(seconds) {
    var secondsObject = hoursMinutesSeconds(seconds);
    var hourHand = ((360 * secondsObject.hours) + (.5 * secondsObject.minutes) + (.008333 * secondsObject.seconds));
    var minuteHand = ((6 * secondsObject.minutes) + (.1 * secondsObject.seconds));
    var secondHand = secondsObject.seconds;

    if (secondsObject.hours > 0) {
        hourHand -= (secondsObject.hours * 360);
    }

    console.log ("The hour hand is at: " + hourHand + " degrees");
    console.log ("The minute hand is at: " + minuteHand + " degrees");
    console.log ("The second hand is at: " + secondHand + " degrees");

}

clockHandAngles(5000);
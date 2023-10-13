// enum Days{
//     sun,mon,tue,wed,tus,fri,sat
// }
// let whichDay:Days;
// whichDay=Days.tue
// console.log(whichDay);
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thu"] = 4] = "thu";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
function printDay(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 7) {
        var day = Days[dayNumber - 1]; // Convert the number to the enum value
        console.log(day.charAt(0).toUpperCase() + day.slice(1)); // Capitalize the first letter
    }
    else {
        console.log("Invalid day number");
    }
}
// Example usage:
printDay(3); // This will print "Sunday"
// This will print "Monday"

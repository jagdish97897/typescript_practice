// enum Days{
//     sun,mon,tue,wed,tus,fri,sat
// }
// let whichDay:Days;
// whichDay=Days.tue
// console.log(whichDay);

// enum Days {
//     sun, mon, tue, wed, thu, fri, sat
// }

// function printDay(dayNumber: number): void {
//     if (dayNumber >= 1 && dayNumber <= 7) {
//         const day = Days[dayNumber - 1]; // Convert the number to the enum value
//         console.log(day.charAt(0).toUpperCase() + day.slice(1)); // Capitalize the first letter
//     } else {
//         console.log("Invalid day number");
//     }
// }

// // Example usage:
// printDay(3); // This will print "Sunday"
//  // This will print "Monday"


enum Days{
    sun,mon,tue,wed,tus,fri,sat
}
// let whichDay:Days;
// whichDay=Days.tue
function whichDay(day:Days)
{
    console.log(whichDay);
}

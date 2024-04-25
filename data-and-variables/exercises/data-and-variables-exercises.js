// Declare and assign the variables
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384000;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable
console.log(typeof shuttleName); // Should print 'string'
console.log(typeof shuttleSpeedMph); // Should print 'number'
console.log(typeof distanceToMarsKm); // Should print 'number'
console.log(typeof distanceToMoonKm); // Should print 'number'
console.log(typeof milesPerKm); // Should print 'number'

// Calculate a space mission to Mars
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission to Mars
console.log(${shuttleName} will take ${daysToMars} days to reach Mars.);

// Calculate a trip to the Moon
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the Moon
console.log(${shuttleName} will take ${daysToMoon} days to reach the Moon.);

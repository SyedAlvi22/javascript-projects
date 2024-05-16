const readlineSync = require('readline-sync');

// Define three variables for the LaunchCode shuttle
let fuelLevel;
let astronauts;
let altitude = 0;

/* Exercise #4 */

// a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000.
while (true) {
  fuelLevel = parseInt(readlineSync.question('Enter the starting fuel level (must be a positive integer greater than 5000 but less than 30000): '), 10);
  if (fuelLevel > 5000 && fuelLevel < 30000 && Number.isInteger(fuelLevel)) {
    break;
  }
  console.log('Invalid input. Please enter a positive integer greater than 5000 but less than 30000.');
}

// b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (true) {
  astronauts = parseInt(readlineSync.question('Enter the number of astronauts (maximum of 7): '), 10);
  if (astronauts > 0 && astronauts <= 7 && Number.isInteger(astronauts)) {
    break;
  }
  console.log('Invalid input. Please enter a positive integer up to a maximum of 7.');
}

// c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel > 0) {
  fuelLevel -= 100 * astronauts;
  if (fuelLevel < 0) {
    fuelLevel = 0; // Ensure fuel level doesn't go below 0
  }
  altitude += 50;
}

/* Exercise #5 */

// Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
console.log(`The shuttle gained an altitude of ${altitude} km.`);

// If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”
if (altitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}

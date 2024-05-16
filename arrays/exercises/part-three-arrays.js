let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

// 1) Insert the string 'keys' at index 3 without replacing any other entries.
cargoHold.splice(3, 0, 'keys');
console.log(cargoHold); // [1138, 'space suits', 'parrot', 'keys', 'instruction manual', 'meal packs', 'space tether', '20 meters']

// 2) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).
let indexToRemove = cargoHold.indexOf('instruction manual');
if (indexToRemove !== -1) {
    cargoHold.splice(indexToRemove, 1);
}
console.log(cargoHold); // [1138, 'space suits', 'parrot', 'keys', 'meal packs', 'space tether', '20 meters']

// 3) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.
cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
console.log(cargoHold); // [1138, 'space suits', 'cat', 'fob', 'string cheese', 'space tether', '20 meters']

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

// 1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold[5] = 'space tether';
console.log(cargoHold); // ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', 'security blanket']

// 2) Remove the last item from the array with pop. Print the element removed and the updated array.
let removedItem = cargoHold.pop();
console.log(removedItem); // 'security blanket'
console.log(cargoHold); // ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether']

// 3) Remove the first item from the array with shift. Print the element removed and the updated array.
let firstItemRemoved = cargoHold.shift();
console.log(firstItemRemoved); // 'oxygen tanks'
console.log(cargoHold); // ['space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether']

// 4) Add the items 1138 and ‘20 meters’ to the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold); // [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters']

// 5) Use a template literal to print the final array and its length.
console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);
// The array [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'] has a length of 7.

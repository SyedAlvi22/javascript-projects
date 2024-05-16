let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

// 1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
let combinedCabinet = holdCabinet1.concat(holdCabinet2);
console.log(combinedCabinet); 
// ['duct tape', 'gum', 3.14, false, 6.022e23, 'orange drink', 'nerf toys', 'camera', 42, 'parsnip']
console.log(holdCabinet1); 
// ['duct tape', 'gum', 3.14, false, 6.022e23] - concat does not alter the original array.

// 2) Print a slice of two elements from each array. Does slice alter the original arrays?
let sliceCabinet1 = holdCabinet1.slice(1, 3);
let sliceCabinet2 = holdCabinet2.slice(2, 4);
console.log(sliceCabinet1); 
// ['gum', 3.14]
console.log(sliceCabinet2); 
// ['camera', 42]
console.log(holdCabinet1); 
// ['duct tape', 'gum', 3.14, false, 6.022e23] - slice does not alter the original array.
console.log(holdCabinet2); 
// ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'] - slice does not alter the original array.

// 3) Reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
console.log(holdCabinet1); 
// [6.022e23, false, 3.14, 'gum', 'duct tape'] - reverse alters the original array.

holdCabinet2.sort();
console.log(holdCabinet2); 
// [42, 'camera', 'nerf toys', 'orange drink', 'parsnip'] - sort alters the original array.

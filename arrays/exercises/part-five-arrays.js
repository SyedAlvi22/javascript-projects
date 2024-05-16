let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

// 1) Use the split method on the string to identify the purpose of the parameter inside the ().
let splitStr = str.split(' ');
console.log(splitStr); 
// ['In', 'space,', 'no', 'one', 'can', 'hear', 'you', 'code.']

// The parameter inside the split method specifies the delimiter at which the string should be split. In this case, it's a space character (' ').

// 2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joinedArr = arr.join('-');
console.log(joinedArr); 
// 'B-n-n-5'

// The parameter inside the join method specifies the separator that will be placed between each element of the array in the resulting string. In this case, it's a hyphen ('-').

// 3) Do split or join change the original string/array?
console.log(str); 
// 'In space, no one can hear you code.' - split does not change the original string.
console.log(arr); 
// ['B', 'n', 'n', 5] - join does not change the original array.

// 4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoArray = cargoHold.split(',');
cargoArray.sort();
let newCargoHold = cargoArray.join(',');
console.log(newCargoHold); 
// 'batteries,food,plasma sword,space suits,water'

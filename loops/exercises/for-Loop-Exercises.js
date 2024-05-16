// Exercise #1
// a. Print the numbers 0 - 20, one number per line.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

// c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
for (let i = 12; i >= -14; i -= 2) {
  console.log(i);
}

// d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Exercise #2
let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42];

// a. Print each element of the array to a new line.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// b. Print each character of the string - in reverse order - to a new line.
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

// Exercise #3
let nums = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenNums = [];
let oddNums = [];

// a. One array contains the even numbers, and the other holds the odds.
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNums.push(nums[i]);
  } else {
    oddNums.push(nums[i]);
  }
}

// b. Print the arrays to confirm the results.
console.log('Even numbers:', evenNums);
console.log('Odd numbers:', oddNums);

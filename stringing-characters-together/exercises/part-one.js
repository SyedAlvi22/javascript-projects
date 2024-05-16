let num = 1001;

console.log(num.length); // Prints undefined because num is an integer and does not have a length property.

if (String(num).includes('.')) {
  console.log(String(num).replace('.', '').length); // If num were a decimal, this would print the number of digits excluding the decimal point.
} else {
  console.log(String(num).length); // Prints the number of digits in the integer num.
}

let decimalNum = 123.45;
console.log(String(decimalNum).replace('.', '').length); // Prints the number of digits in the decimal number excluding the decimal point.

let num2 = 123.45;

if (String(num2).includes('.')) {
  console.log(String(num2).replace('.', '').length); // Prints the number of digits in the decimal number excluding the decimal point.
} else {
  console.log(String(num2).length); // Prints the number of digits in the integer num2.
}

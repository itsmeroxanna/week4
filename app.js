//  My variables
let name = "Roxanna";
let age = 28;
let city = "San Antonio, Texas";

// Concatenated string variable 
let concatenatedString = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;

// The output of the concatenated string to the console
console.log(concatenatedString);


// And how has the weather been like in Texas? "if" conditional statement
let temperature = 82;

if (temperature > 90) {
    console.log("It's a hot day!");
} else if (temperature >= 75 && temperature <= 85) {
    console.log("The weather is pleasant.");
} else {
    console.log("Fall is approaching!");
}

// Switch Statement
switch (new Date().getDay()) {
    case 6:
      text = "Today is Monday";
      break; 
    case 0:
      text = "Today is Tuesday";
      break; 
    default: 
      text = "Im totally looking forward to the Weekend already!";
  }

// Number Method
const a = '10' - 1;
console.log(a); // 9

const b = '4' / 2;
console.log(b); // 2

const c = '3' * 3;
console.log(c); // 9

// String Variable
let text1 = "Hello Programming World!";
let text2 = text1.toUpperCase();
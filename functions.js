// converting C to F
function celsiusToFahrenheit(input1) {
   // input1 = any celsius temperature

   let fahrenheit = input1 * (9 / 5) + 32; // C to F conversion
   return fahrenheit;
}

// reverse a string
// one of many ways to do
// this method includes: split, reverse, join
function reverseMethod(input1) {
   // input1 = any word or phrase
   let word = input1.split("").reverse().join("");
   return word;
}

// factorialize a number
// short hand n! ex: 3! = 1 * 2 * 3 = 6
function factorializeNum(input1) {
   // input1 = any number
   let facNumTotal = 1; // 0! = 1. loop will not start if input1 is 0 since it starts at 1, making 0 = 1
   for (var i = 1; i <= input1; i += 1) {
      // will loop each number up to the given input1 number
      facNumTotal = facNumTotal * i; // each number up to given input1 number will times eachother
   }
   return facNumTotal;
}

// longest word in a string
function longestWord(input1) {
   // input1= a sentence o
}

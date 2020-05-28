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
// loops through string and finds which word is the longest
// returns a number of the longest word
function longestWord(input1) {
   // input1= a string
   let splitStr = input1.split(" ");
   let longestWord = 0;
   for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i].length > longestWord) {
         longestWord = splitStr[i].length;
      }
   }
   return longestWord;
}

// NEED TO figure out how to implement  !!!!
// function largestNumArr(input1) {
//    // input1 = array of numbers

//    return input1.map(function (subArray) {
//       return Math.max.apply(null, subArray);
//    });
// }

// confirm the ending
// can use .endsWith method or substring method
// endsWith method = determines whether a string ends with the characters of a specified string, returning T or F
// substring method = returns the part of the string between the start and end indexes, or to the end of the string
// using substr instead of substring, substr on mdn says avoid when possible. used in FCC challenge
// neg in substr starts index from back
function confirmEnding(input1, input2) {
   // input1 = string
   // input2 = target
   // example : "dog" - string, "g" - target
   if (input1.substr(-input2.length) === input2) {
      return true;
   } else {
      return false;
   }
}

// repeat a string repeat a string
// loop starts at num (input2) and goes down in incremnts of 1 (--)
// adds each string (input1) to the enpty string (repaeated string) after each loop
// .repeat() method also can be used
function repeatString(input1, input2) {
   // input1 = string
   // input2 = num of times to loop
   let repeatedString = "";
   while (input2 > 0) {
      repeatedString += input1;
      input2--;
   }
   return repeatedString;
}

// truncate a string
// shortens a string if it is longer than the specificed number of character
// truncated string will end w/ translatable ellipsis sequence ("...") (by default) or specified characters
// use slice (0, num) 0 = start, num = char, where to slice up till
// spaces COUNT!
function truncateStr(input1, input2) {
   // input1 = string (arg 1)
   // input2 = maximum string length (arg 2)
   if (input1.length > input2) {
      return input1.slice(0, input2) + "...";
   }
   return input1;
}

// need to figure out why its 0 all the time
function findersKeepers(input1) {
   // input1 = arr
   let num = 0;
   for (var i = 0; i < input1.length; i++) {
      let num = arr[i];
      if (num % 3 === 0) {
      }
   }
   return num;
}

// Boo who - checking if value is a boolean primitive
// use typeof
function booWho(input1) {
   //input1 = any value
   if (typeof input1 === "boolean") {
      return true;
   }
   return false;
}

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
// largest numbers in the array
function largestNumArr(input1) {
   // input1 = array of numbers
   let arr = [43, 21, 77, 92, 2, 36, input1];
   let newArr = Math.max(...arr);

   console.log(newArr);
   return newArr;
}
// return input1.map(function (subArray) {
//    //       return Math.max.apply(null, subArray);
//    //    });

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

// finders keepers
function findersKeepers(input1, input2) {
   // input1 = num
   // input2 = num

   let arr = [input1, input2];

   for (var i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (num % 4 === 0) {
         return num;
      }
   }
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

// title case a sentence

function capTitle(input1) {
   // input1 = string
   return input1
      .toLowerCase() // lowercases all words in string
      .split(" ") // splits each word in the string
      .map((word) => {
         // manipulates each word in array
         // each letter in each word (0 place) is capitalized and put in new array, then
         // rest of the word is concatnaed to the capitalized letter in the new array made by map
         return word[0].toUpperCase() + word.slice(1);
      })
      .join(" "); // joins all elements in array back together
}

// slice and splice
function sliceNSplice(input1) {
   // input1 = index of where to insert element of second array
   let arr1 = [" Earth", " Fire", " Water", " Air"];
   let arr2 = [" Earth Kingdom", " Fire Nation", " Water Tribe", " Air Nomads"];
   let allNationsAndElements = arr2.slice(); // copy of array2
   allNationsAndElements.splice(input1, 0, ...arr1); // splice(index of elem, how many to replace, elem that is going to replace)
   // operator ... used to add each elem individually. just copying array would keep it in bracet form
   return allNationsAndElements;
}

// falsy bouncer
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
function byeFalsy(input1) {
   let arr = [7, "Hi", "", false, 9, 0, input1];
   return arr.filter((x) => x); // this works because filter method returns truthy values from the callback

   // this is basically answer above but in short form
   // return arr.filter(function (x) {
   // return x;
}

// where do i belong

function whereDoIBelong(input1) {
   let arr = [21, 7, 42, 59];
   arr.push(input1);
   arr.sort(function (a, b) {
      return a - b;
   });
   return arr.indexOf(input1);
}

// mutation
function mutation(input1, input2) {
   let firstWord = input1.toLowerCase();
   let secondWord = input2.toLowerCase();
   for (var i = 0; i < secondWord.length; i++) {
      if (firstWord.indexOf(secondWord[i]) < 0) {
         return false;
      }
   }
   return true;
}

// chunky money // NEED TO FIX
function chunkyMonkey(input1, input2) {
   var arr = input1;
   var size = input2;
   var newArr = [];
   var i = 0;
   while (arr.length > 0) {
      newArr.push(arr.splice(i, size));
      // i += size;
   }
   console.log(newArr);
   return newArr;
}

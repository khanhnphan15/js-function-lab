

//1 (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
//   }
  
console.log(maxOfTwoNumbers(3, 9));
  
//2 Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(x, y, z) {
    if ((x >= y) && (x >= z)) {
        return x;
    } else if ((y >= x) && (y >= z)) {
        return y;
    } else {
        return z;
    }
}

console.log(maxOfThree(343,35124,42));

//3 Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(vowel) {
    if ('aeiou'.includes(vowel.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

console.log(isCharAVowel('s'))
    
//4 Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

  function sumArray(nums) {
    return nums.reduce((acc, curr) => acc + curr)
  }

  console.log(sumArray([2, 4, 5]));
 

//5 Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(nums) {
    return nums.reduce((acc, curr) => acc * curr)
}

console.log(multiplyArray([2,4,5]));

//6 Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function () { 
  return arguments.length;
}

console.log(numArgs('kj', 'jh'))

//7 Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("rockstar"));

//8 Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = (arr) => {
  return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

console.log(longestStringInArray(['a', 'aa', 'aaa']));


//9 Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(strings, nbr) {
  return strings.reduce((acc, curr) => ((curr.length > nbr) ? [...acc, curr] : acc), []);
}
  console.log(stringsLongerThan(['aaaa', 'aaa', 'aa'], 2));

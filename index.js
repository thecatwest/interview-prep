// given a string, convert the first letter to a capital without using built-in methods like toUpperCase, toLocaleUpperCase, or Replace
let myString = 'goldfish';
// create altered copy of originl string
// declare fn called upperCaseFirst

function upperCaseFirst(inputStr) {
    // generate algorithm using built-in helper methods instead of three listed as off-limits
    // first, obtain numerical ASCII value for character using charCodeAt() method (returns integer between 0 and 500 representing UTF-16 code unit at given index)

    let valueOfFirstChar = inputStr.charCodeAt(0);
    console.log('Value of first character:', valueOfFirstChar);

    // subtract 32 from this value, use it to generate new character using fromCharCode method
    var upperCaseLetter = String.fromCharCode(valueOfFirstChar - 32);
    console.log('Uppercase first character:', upperCaseLetter);

    // isolate remainder of original string: create new string that contains every character from original one except first character (using slice method)
    var restOfString = inputStr.slice(1);
    console.log('Rest of string:', restOfString);

    // join string containing uppercase first letter (upperCaseLetter) w/ string containing remianing characters from original string (restOfString) using concatenation
    var finalResult = upperCaseLetter + restOfString;
    console.log('Final Result:', finalResult);

    return finalResult;
}

var upperCaseResult = upperCaseFirst('goldfish');
console.log(upperCaseResult);


// fibonacci sequence
function fibonacci(n) {
    if (n<2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

fibonacci(5);

// anagram
function anagram(firstString, secondString) {
    function sortedString(str) {
        return str.toLowerCase().split('').sort().join('');
    }
    return sortedString(firstString) === sortedString(secondString);
}

anagram("George Bush", "He bothers Gore");

// Palindrome
// splitting string into individual characters and saving as array, join array elements into string, then compare to original solution
function palindrome(str) {
    return str.split('').reverse().join('') === str;
}

palindrome("rotator")

// Palindrome using iterative solution
function palindrome(str) {
    let array = str.split('');
    let count = array.length/2;
    for(let i = 0; i < count; i++){
        if(array[i !== array[array.length - 1 -i]]){
            return false;
        }
    }
    return true
}

palindrome("rotator")

// reverse integer
// convert number to string, split characters into array, reverse array, join characters in array, then convert back into number
function reverseInt(n) {
    let revNum = parseInt(String(n).split('').reverse().join(''));
    return n >= 0 ? revNum : revNum *-1;
}
// TODO: throws illegal return statement error - figure out why
// return reverseInt(-103);

// FizzBuzz - fn that clgs numbers from 1 to n. Replace multiples of 3 with fizz, multiples of 5 with buzz, multiples of both 3 and 5 with fizzbuzz
function fizzBuzz(n) {
    for(let i = 0; i <= n; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('fizzbuzz');
        } else if(i%3 === 0){
            console.log('fizz');
        } else if(i%5 === 0){
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// not sure why this is returning warning...
fizzBuzz(16);

// find duplicate number in array of integers using hash
const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10];

const findDuplicates = (arr) => {
    const foundDupes = {};

    for(let i = 0; i < arr.length; i++) {
        if(foundDupes[arr[i]]) {
            return arr[i]
        } else {
            foundDupes[arr[i]] = arr[i];
        }
    }

    return false;
}

console.log(findDuplicates(arr));

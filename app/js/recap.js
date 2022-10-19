//Data types

//undefined
//anything that has not been defined

//Boolean
//True or False

//String
//Anything inside quotation marks
const string = 'class'

//Number
//A value(Integer/ =Float)
const num = 20

//Null
//values defined but haven't been assigned

//Symbol

//Object
//collection of key value pairs
const person = {
    name: 'Olingo Maxwell',
    age: 24,
    married: true,
    occupation: 'Web Developer'
}

//arrays
//collection of other datatypes

const devClass = ['jahfar ahmed', 'bill odongo', 'fauzia omala', 'allen shamrock', 'brian okoth', 'Ismael Hussein', 'Lenox Okoth', 'Doreen Nafula', 'Robert Okello', 'jpnah Maina', 'Yasir Ahmed']

//String
const stringOne = 'We are learning JavaScript'

//String Methods
//.includes() - Checks for the character passed if present in the string. Returns True or false

const includeI = stringOne.includes('z')

console.log(includeI);

//.toUpperCase() - Converts the string to Uppercase
//.toLowerCase() - Converts the string to Lowercase

const upper = stringOne.toUpperCase()
const lower = stringOne.toLowerCase()

console.log(upper);
console.log(lower);
console.log(stringOne);

//.length - Returns the length of the string

const len = stringOne.length

console.log(len);

//.charAt[] - Returns the character at a specific index

const charAtOne = stringOne.charAt([1])

console.log(charAtOne);

//.concat() - Joins two or more Strings

const sentence = stringOne.concat(" and we are going to Understand")

console.log(sentence)

//.trim() - removes white spaces at the beginning of a string

let trial = ' Lesson Done'

let trimmed = trial.trim()

console.log(trial);
console.log(trimmed);

//.slice() - extracts a part of a string and returns the extracted part in a new string. Has a starting point and an ending point. If a parameter is negative, the position is counted from the end of the string.

let sliceOne = 'Learning more about Strings'

let slicedOne = sliceOne.slice(2, 13)

console.log(slicedOne);

//.substring() - similar to slice but The difference is that start and end values less than 0 are treated as 0

let part = sliceOne.substring(2, 13)

console.log(part);

//.substr() - similar to the slice method but the second parameter specifies the length of the extracted part If the first parameter is negative, the position counts from the end of the string

let partB = sliceOne.substr(7, 6);

console.log(partB);

//.replace() - replaces the string with a new string. This method is case sensitive

let newString = sliceOne.replace('I wanna work at Tesla')

console.log(newString);

//For more on string methods please visit https://www.w3schools.com/js/js_string_methods.asp or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//Numbers when working with numbers, undefined turns to NAN(Not a Number), null Turns to a 0, true turns to a 1 and false turns to a 0

//initializing variables with numbers

//Integer
let nums = 200

//Floats
let decimal = 200.45

//Performing mathematical operations with numbers

//Addition
let addition = 3 + 4

console.log(addition);

//Subtraction
let subtraction = 3 - 4

console.log(subtraction);

//Division
let division = 3 / 4

console.log(division);

//Multiplication
let multiply = 3 * 4

console.log(multiply);

//Modulus
let Modulus = 9 % 4

console.log(Modulus);

//Look at more on Numbers from the following links https://www.w3schools.com/js/js_numbers.asp and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

//Arrays
//An array is a special variable, which can hold more than one value
//JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

//How to create an array
let newArr = ['maxwell']

console.log(newArr);

//ARRAY METHODS
//.push() -Adding elements to the array at the end

newArr.push('olingo')

console.log(newArr);

//.pop() -Removing elements at the end of an array

newArr.pop('olingo')

console.log(newArr);

//.toString() - Converts an array to a string

let stringi = newArr.toString()

console.log(stringi);

//.unshift() -Adding elements to the array at the start

newArr.unshift('olingo')

console.log(newArr);

//.shift() -remove elements to the array at the start

newArr.shift('olingo')

console.log(newArr);

//.concat() - used to join two or more arrays
let arr1 = ['maxwell', 'sailas', 'gathu', 'john']

let arr2 = ['alex', 'natasha', 'nyamwange']

let arr3 = ['hope', 'magdalene', 'isika']

let combined = newArr.concat(arr1,arr2,arr3)

console.log(combined);

//.sort() - Arrange an array in an ascending order

let sorted = combined.sort()

console.log(sorted);

//.reverse() - Arrange an array in an opposite order

let reversed = combined.reverse()

console.log(reversed);

//.copyWithin() - Copies array elements within the array, to and from specified positions. This method overwrites the existing values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); //Copy the first two array elements to the last two array elements

console.log(fruits);

//.every() - Checks if every element in an array pass a test

const ages = [32, 33, 16, 40];

ages.every((age) => {
    return age > 18;
})

console.log(ages);

//.map() - Creates a new array with the result of calling a function for each array element

//get the squareroot of the values in the array before

const numbers = [4, 9, 16, 25]

const neArr = numbers.map(Math.sqrt)

console.log(neArr);

//or multiply the above array with two
const product = numbers.map((num) => {
    return num * 2
})

console.log(product);

//.filter() - Creates a new array with every element in an array that pass a test

//Return an array of all values in ages[] that are 18 or over
const result = ages.filter((age) => {
    return age >= 18
});

console.log(result);

//.reduce() - Reduce the values of an array to a single value (going left-to-right)
const reduced = ages.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(reduced);

//LOOPS
//For loop
//do while loop
//while loop
//for of loop

//Objects

let devClass1 = {
    name: 'dev class',
    total: 11,
    present: true
}

for (stupid in devClass1) {
    // console.log(key);
    console.log(devClass1[stupid]);
    // console.log(Object.values(devClass1));
}

console.log(devClass1);
console.log(Object.values(devClass1))
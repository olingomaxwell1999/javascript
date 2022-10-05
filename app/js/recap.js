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

//Arrays

//Objects
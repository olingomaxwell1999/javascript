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

//Numbers

//Arrays

//Objects
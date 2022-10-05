// selecting the element
const root = document.querySelector('.root')
const h1 = document.querySelector('h1')

const heading = document.createElement('h1')

const subheading = document.createElement('h2')

subheading.innerText = 'Arrays and Array Methods'

heading.innerText = 'Javascript Training'

root.appendChild(subheading)

h1.appendChild(heading)

//Map method

let devClass = ['jahfar', 'bill', 'Robert', 'Brian', 'Ismael', 'Lenox', 'Doreen', 'Johner', 'Yasir', 'Fauzia', 'Shamrock']

const dev = devClass.map(showDev)

function showDev(dev) {
  return dev
}
 
let nums = [1, 2, 3, 4, 5]

// const multiply = nums.map((num, i, arr) => {
//     return num *3 + i
// })

// console.log(multiply)

console.log(showDev)
//Filter
let num2 = [1, 2, 3, 4, 5, 6, 7, 8]

const lessThanFive = num2.filter((num) => {
    return num > 5
})

console.log(lessThanFive);

//Reduce method

let num3 = [1, 2, 3, 4, 5, 6, 7, 8]

// const strat = 0

const reducedArray = num3.reduce((curr, prev, i, arr) => {
  return prev +curr
})

console.log(reducedArray);

//Objects

let property = 'speed'
let speed = '330km/hr'

let car = {
  color: 'red',
  model: 'BMW',
  wheels: 'four wheel',
  seats: '5',
  [property]: speed,

  'engine power': '4000cc'
  
  //4000cc
}

//Destructuring in es6

let { color, model, wheels, seats, } = car

delete car.seats

// console.log(engine power);

//Destructuring in es5

const power = car["engine power"]

console.log(power);

// const color = car.model

console.log(car);

//red
//BMW
//Four wheel

const func = (function (a) {
  delete a
  return a
}, (5))

console.log(func);


//Loops
//for loop
//do while loop
//for of loop
//for in loop
//while loop
//for next

//For loop
// let x

// for (x = 0; x <= 10; x++) {
//   console.log(x);
// }

//While loop

// let y = 1

// while (y <= 10) {
//   console.log(y);
//   y++
// }

//Do While Loop

// let z = 0

// do {
//   console.log(z);
//   z++
// } while(z <= 10)

let cars = ['Nissan', 'BMW', 'Subaru', 'Audi', 'Jeep']

let planes = ['helicopter', 'jet', 'aeroplane', 'drone']

let nissan = cars[0]

const clone = [...cars]

const combined = [cars, ...planes]

console.log(clone);

console.log(cars);

console.log(combined);

// console.log(nissan);

// for (car of cars) {
//   console.log(car);
// }


//Classes

class Person {
  constructor(name, age, ethnicity, gender) {
    this.name = name
    this.age = age
    this.ethnicity = ethnicity
    this.gender = gender
  }

  walk() {
    console.log('We are Walking towards Tesla');
  }
}

const Olingo = new Person('Olingo Maxwell', 24, 'african', 'male')

const Yasir = new Person("Yasir Ahmed", 50, 'african', 'hermaphrodite')

console.log(Olingo);
console.log(Yasir);

// import { } from ''
// import Button from 'bootstrap'

// let x = 1

// const show = () => {
//   return x
// }

// show()


// {
//   var a = 'block scope'
//   let b = 'block scope'
//   const c = 'block scope'
// }

// function scope() {
//   var a = 'functional scope'
//   var b = 'functional scope'
//   var c = 'functional scope'
// }

// const a = 10

// const trial = function () {
//   const a = 10
//   console.log(a);
// }

// console.log(a);

// {
//   const a = 10
//   console.log(a);
// }

//Interview Questions

// let students = [
//   {
//     name: 'Fauzia Omala',
//     admission: 1,
//     marks:70
//   },
//   {
//     name: 'Allen Shamrock',
//     admission: 2,
//     marks:65
//   },
//   {
//     name: 'Bill Odongo',
//     admission: 3,
//     marks:62
//   },
//   {
//     name: 'Jahfar ',
//     admission: 4,
//     marks:59
//   },
//   {
//     name: 'Ismael ',
//     admission: 5,
//     marks:75
//   },
//   {
//     name: 'Brian Okoth',
//     admission: 6,
//     marks:50
//   },
//   {
//     name: 'Yasir Ahmed',
//     admission: 7,
//     marks:77
//   },
//   {
//     name: 'Lenox Okoth',
//     admission: 8,
//     marks:55
//   },
//   {
//     name: 'Johner ',
//     admission: 9,
//     marks:72
//   },
//   {
//     name: 'Robert Okello',
//     admission: 10,
//     marks:79
//   },
//   {
//     name: 'Doreen Nafula ',
//     admission: 11,
//     marks:80
//   },
// ]

// //Return the name of the students in capital letters

// // let names = []

// // for (i = 0; i < students.length; i++) {
// //   names.push(students[i].name.toUpperCase())
// // }

// let names = students.map((stu) => {
//   return stu.name.toUpperCase()
// })

// console.log(names);

// //return students who scored more than 60 marks

// const details = students.filter((student) => {
//   return student.marks < 60
// })

// console.log(details);

// //Return the name of the students who scored more than 60 marks and their admission number is more than 5

// const detail = students.filter((student) => {
//   return student.marks < 60 && student.admission > 5
// })

// console.log(detail);

// //Return the sum of the marks of the students

// const sum = students.reduce((acc, curr) => {
//   return acc + curr.marks
// }, 0)

// console.log(sum)

// //Return names of students who scored marks more than 60

// const twomethods = students.filter((stu) => {
//   return stu.marks > 60
// }).map((stu) => {
//   return stu.name
// })

// console.log(twomethods);

let students = [
  {
    name: 'Jahfar Ahmed',
    admission: 1,
    marks: 50
  },
  {
    name: 'Bill Odongo',
    admission: 2,
    marks: 55
  },
  {
    name: 'Fauzia Omala',
    admission: 3,
    marks: 59
  },
  {
    name: 'Allen Shamrock',
    admission: 4,
    marks: 65
  },
  {
    name: 'Brian Okoth',
    admission: 5,
    marks: 70
  },
  {
    name: 'Ismael Hussein',
    admission: 6,
    marks: 75
  },
  {
    name: 'Lenox Okoth',
    admission: 7,
    marks: 60
  },
  {
    name: 'Robert Okello',
    admission: 8,
    marks: 76
  },
  {
    name: 'Doreen Nafula',
    admission: 9,
    marks: 77
  },
  {
    name: 'Johner Maina',
    admission: 10,
    marks: 74
  },
  {
    name: 'Yasir Ahmed',
    admission: 11,
    marks: 78
  }
]

let names = students.map((student) => {
  return student.name.toLocaleUpperCase()
})

console.log(names);

let aboveSixty = students.filter((student) => {
  return student.marks > 60
}).map((student) => {
  return student.name
})

console.log(aboveSixty);

let sum = students.reduce((acc, curr) => {
  return acc + curr.marks
}, 0)

console.log(sum);


//students above 60% and admission numbers

let studetsAvoveSixty = students.filter((student) => {
  return student.marks > 60
}).map((student) => {
  return student.name + " " + student.admission
})

console.log(studetsAvoveSixty);
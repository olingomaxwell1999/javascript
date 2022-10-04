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

let x = 1

const show = () => {
  return x
}

show()


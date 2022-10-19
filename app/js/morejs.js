// function add(a, b) {
//     console.log(a + b);
// }

// add(5, 10)

// const add = a => console.log(a + 5);


// add(5)

//Spread Operator

//clone array

let devClassOne = ['jahfar', 'bill', 'robert', 'Allen', 'ismael', 'doreen']

console.log(devClassOne);

let devClassClone = [...devClassOne]

console.log(devClassClone);

//Combining Arrays

let devClassTwo = ['brian', 'senior engineer Lenox', 'joner', 'yasir', 'fauzia']

console.log(devClassTwo);

let devClassi = [...devClassOne, ...devClassTwo]

console.log(devClassi);

//Classes

let developers = []

class Person{
    constructor(name, age, height, beard, gender) {
        this.name = name
        this.age = age
        this.height = height
        this.beard = beard
        this.gender = gender
    }

    walk() {
        // const area = document.querySelector('.trial')

        // area.innerText = 'We are learning js'

        console.log("the function is working");
    }
}

const ismael = new Person('Ismael', 60, 4.5, false, 'gay')

const fauzia = new Person('Fauzia', 61, 5, false, 'lesbian')

const bill = new Person('Bill', 10, 2.3, true, 'haemaphrodite')

console.log(ismael.age);
console.log(ismael);
console.log(fauzia);
console.log(bill);

developers.push(ismael)
developers.push(fauzia)
developers.push(bill)

console.log(developers);

//Inheritance in class

// class Teacher extends Person {

//     constructor(name, age, gender, degree, experience, status) {
//         super(name)
//         super(age)
//         super(gender)

//         this.degree = degree
//         this.experience = experience
//         this.status = status
//     }

//     teach() {
//         console.log('we are Learning!!!');
        
//     }
// }

// let martins = new Teacher('martin', 40, 'them', 'Bs Comp Science', "20 years")

// console.log(martins);

// console.log('20'+20);


const fetchNews = async () => {
    const respo = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-09-19&sortBy=publishedAt&apiKey=ad634df909ad48c3be0b287a41d6be27')

    const data = await respo.json().then((article) => {
        console.log(article);
    })

    // console.log(data)
}

fetchNews()
//What is Dom?
//The Dom Tree
//Selecting elements from the html
//getElementsById()
//getElementsByClassName()
//document.querySelector()
//document.querySelectorAll()
//document.getElementByTagName()


//Creating Elements
//document.createElement()

//Styling elements
//document.style()

//Selecting the body tag

const body = document.querySelector('body')

console.log(body);

//Selecting the Container

const container = document.getElementsByClassName('container')

console.log(container);

//Selecting the Image container
const imageContainer = document.getElementById('image')

console.log(imageContainer);

//selecting the image tag
const img = document.querySelector('img')

img.src = 'https://cdn.givemesport.com/wp-content/uploads/2022/07/sasha-banks-premiere-apparition-publique.jpg?width=1200&aspect_ratio=16:9'

// img["src"] = 'https://cdn.givemesport.com/wp-content/uploads/2022/07/sasha-banks-premiere-apparition-publique.jpg?width=1200&aspect_ratio=16:9'

console.log(img);

//Selecting the text container

const textContainer = document.querySelector('.text')

textContainer.innerHTML = '<h3>Sasha Banks</h3>'

console.log(textContainer);

//Selecting the h3
// const heading = document.querySelector('h3')

// heading.textContent('Sasha Banks')

console.log(heading);

//Selecting the paragraph
const paragraph = document.querySelector('p')

console.log(paragraph);

//Selecting the button
const button = document.querySelector('button')

console.log(button);

//selecting all the Divs
const divs = document.querySelectorAll('div')

console.log(divs);

let a = 6
let b = 4
let x = (a > 8) ? a : b

console.log(x);
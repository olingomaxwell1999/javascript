console.log('Hello world');

//why do we get 1 after running this code
// let x = 8
// x--

// console.log(x);

// let y = 2

// y++

// console.log(y);

// console.log(x % y);

//filter method
// let sampleNumber = [2, 3, 4, 5, 6, 7, 8]

// let moreThanFour = sampleNumber.filter((samp) => {
//     return samp >= 4
// })

// console.log(moreThanFour);


//Scope
//Global Scope
// var globalVar = 7
//Block scope 
// {
//     let blockVar = 7

//     console.log(blockVar);
// }

// console.log(blockVar);

//functional

// let functionalScope = () => {
//     let numss = 9

//     console.log(numss);
// }

// console.log(numss);

// functionalScope()

//loops
//for loop
// let gender = ['m', 'f', 'f', 'f', 'm', 'f', 'f', 'm', 'm', 'm', 'f']
// for (let x = 0; x <= 10; x++) {
    
//     if (x == 8) {
        
//         continue
//         console.log(x + '' + "x is  less than 4")
//     }
//     else if (x < 6) {
//         console.log(x + '' + "x is less than 6")
//         continue
//     }
//     else {
//         console.log(x)
//         break
//     }
// }
//while loop

// let xy = 0;

// while (xy <= 10) {
//     console.log(xy);

//     xy++
// }
//do while

// let xy = 0;

// do {
//     console.log(xy);

//     xy++
// } while(xy <= 10)
//for in

// let house = {
//     roof: "Iron Sheets",
//     floor: "tiles",
//     type: "bungalow",
//     ceiling: "gypsum",
//     rooms: 5,
//     pool: true,
// }

// console.log(house);

// for (let property in house) {
//     if (typeof property[house] == 'number') {
//         console.log(house[property])
//     }
// }

// let x = 0

// switch(x > 11) {
//     case x < 4:
//       console.log(x + " " + 'x is less than 4');
//       break;
//     case x > 12:
//         console.log(x + " " + 'x is less than 6');
//       break;
//     default:
//       console.log(x);
//   }
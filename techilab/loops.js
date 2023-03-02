
//For Loops
// for (let i = 0; i < 10; i++) {
//     console.log("")
//     console.log("Hello Loops")
// }

// //Table of 5
// for (let i = 5; i < 51; i += 5) {
//     console.log(i)
// }

//program to add fist n natrual numbers

// let sum = 0;
// let n = prompt('Enter any number')
// n = Number.parseInt(n);
// for (let i = 0; i < n; i++) {
//     sum += i + 1;
// }
// console.log('sum of first ' + n + " natural number is " + sum)

//For in loops

let obj = {
    usama: 23,
    umair: 25,
    shoaib: 56,
    muzammil: 78
}
for (let a in obj) {
    console.log(`Marks of ${a} is ${obj[a]}`)
}
for (let a of "u") {
    console.log(obj)
}
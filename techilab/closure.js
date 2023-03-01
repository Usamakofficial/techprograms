

// //closure is an action that is inner function can have access to
// //the outer function variables as well as all the global variables

// function outerFun(a) {
//     let b = 10;
//     function innerFun() {
//         let sum = a + b;
//         console.log(sum)
//     }
//     innerFun();
// }
// outerFun(5);
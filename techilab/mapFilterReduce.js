

//Array Map method
// Definition and Usage. map() creates a new array from calling a function
// for every array element. map() calls a function once for each element
// in an array. map() does not execute the function for empty elements. map()
// does not change the original array.

let arr = [10, 20, 30]
let a = arr.map((value, index) => {
    console.log(value, index)
    return value
})
console.log(a);


//Filter method
// The filter() method creates a new array filled with elements that pass
// a test provided by a function. The filter() method does not execute the
// function for empty elements.The filter() method does not change the original array.

let arr2 = [10, 5, 8, 20, 30]
let a2 = arr2.filter((a) => {
    return a < 11;
})
console.log(a2);

//Array Reduce Method
// The reduce() method executes a user-supplied "reducer" callback
// function on each element of the array, in order, passing in the
// return value from the calculation on the preceding element.The
// final result of running the reducer across all elements
//  of the array is a single value.

let arr3 = [2, 3, 4, 3, 2, 1];
let a3 = arr3.reduce((h1, h2) => {
    return h1 + h2;
})
console.log(a3);
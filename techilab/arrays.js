

// Javascript create Array method

var ary = new Array();
ary[0] = 10;
// ary[1] = "Usama";
ary[2] = "Umair"
ary[3] = false;
ary[4] = null;
for (var a = 0; a < 5; a++) {
    document.write("<li>" + ary[a]);
}

//Array Methods

let num = [3, 5, 7, 8, 3];
// let b = num.toString()  //B is now a string
// console.log(b);
// let c = num.join("-");
// console.log(typeof c);
// let r = num.pop();      //pop returns the popped element
// console.log(num, r)
// let s = num.push(12)    //Push returns the new array length
// console.log(num);
// let r = num.shift();       //Removes an element from the start of an array
// console.log(r);
// let r = num.unshift(10);    //Adds element to the beginning returns new array length
// console.log(r, num);
// delete num[0];
// console.log(num, num.length);    //delete a number but length will not changed
let num2 = [9, 13, 24, 10, 12, 15, 16];
// let newArray = num.concat(num2);    //Returns a new array
// console.log(newArray);              //Does not change existing array
// num2.sort();                //Sort Method  it will modifies the original array
// console.log(num2);
// let compare = (a, b) => {
//     return a - b;
// }                                // Sort an array in ascending order
// num2.sort(compare)
// console.log(num2)

//Splice and Slice method


// let deletedValues = num2.splice(2, 4, 1022, 1023, 1234, 1344);    //returns deleted item and modifies the array
// console.log(num2);
// console.log(deletedValues)

//Slice Method
let newNum = num2.slice(3, 5);      //Slice out a piece from an array
console.log(newNum);                // It creates a new array


//Sorted array by removing duplicates
// let arr1 = [2, 4, 5, 4];
// let arr2 = [4, 6, 6, 7, 3];
// //Merge array
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// //  Sort array
// arr3.sort((a, b) => a - b);
// arr3 = [...new Set(arr3)];
// console.log(arr3);
// //  remove duplicates array




// let a1 = [1230, 23, 345, 56, 678];
// let a2 = [910, 023, 234, 345, 456];
// let a3 = [...a1, ...a2];
// a3.sort((a, b) => a - b);
// console.log(a3);
let data = [7, 6, 15, 18, 13, 6, 9];
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if (data[j] > data[j + 1]) {
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
        }
    }
}
console.log(data);
let unique = [...new Set(data)]
console.log(unique)
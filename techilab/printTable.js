
//Javascript program to print the table

function table(number) {
    for (let i = 1; i <= 10; i++) {
        let res = i * number;
        console.log(number + " x " + i + " = " + res);
    }
}
table(5);
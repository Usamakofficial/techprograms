

//Call, apply, and bind are the functions that help you change the
//context of the this keyword present inside the invoking function.

let userDetails = {
    name: "Usama",
    age: 22,
    designation: "software engineer",
    printDetails: function (state) {
        console.log(this.name + " " + state)
    }
}
userDetails.printDetails("Punjab");
let userDetails2 = {
    name: "Umair",
    age: 23,
    designation: "Front-end Developer"
}
//call
userDetails.printDetails.call(userDetails2, "Punjab");

//Apply
userDetails.printDetails.apply(userDetails2, ["punjab"]);

//Bind
let newFun = userDetails.printDetails.bind(userDetails2, "punjab");

newFun();
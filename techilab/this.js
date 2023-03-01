

//This keyword in JavaScript is used to refer the object it belongs to.

var object = this;
console.log(object);

let person = {
    firstName: "Usama",
    lastName: "Anwar",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

}
document.write("<h1>" + person.fullName())

    //In an event this refers to the element that received the event.
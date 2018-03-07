var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// interface Person {
//     firstName: string;
//     lastName: string;
// }
function greeter(person) {
    return "Hello, " + person.fullName;
}
var user = new Student("Daniel", "M.", "Certa");
document.body.innerHTML = greeter(user);

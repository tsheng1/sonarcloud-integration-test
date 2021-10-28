var Student = /** @class */ (function () {
    function Student(firstName, middleInicial, lastName) {
        this.firstName = firstName;
        this.middleInicial = middleInicial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInicial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Charles", "HG", "Santos");
var password = "it should't be here";
var token = "this neither";
document.body.textContent = greeter(user);

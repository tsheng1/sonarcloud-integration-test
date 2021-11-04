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
document.body.textContent = greeter("This must be a constant!");
var user = new Student("Charles", "HG", "Santos");
document.body.textContent = greeter("This must be a constant!");
var password = "it should't be here";
document.body.textContent = greeter("This must be a constant!");
var token = "this neither";
document.body.textContent = greeter("This must be a constant!");
document.body.textContent = greeter(user);
document.body.textContent = greeter("This must be a constant!");

class Student {
	fullName: string;
	constructor(
		public firstName: string,
		public middleInicial: string,
		public lastName: string
	){
		this.fullName = firstName + " " + middleInicial + " " + lastName;
	}
}

class Teacher {
	fullName: string;
	constructor(
		public firstName: string,
		public middleInicial: string,
		public lastName: string
	){
		this.fullName = firstName + " " + middleInicial + " " + lastName;
	}
}

class Staff {
	fullName: string;
	constructor(
		public firstName: string,
		public middleInicial: string,
		public lastName: string
	){
		this.fullName = firstName + " " + middleInicial + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Charles", "H.", "Santos");
let password = "it should't be here"
let token = "this neither"

document.body.textContent = greeter(user);

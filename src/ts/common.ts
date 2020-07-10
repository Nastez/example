console.log('helloggggg');
console.log('hello again');

function greeter(person: string) {
	return "Hello, " + person;
}

let user = "Jane Userrrr";

document.body.textContent = greeter(user);
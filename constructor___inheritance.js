function Person(name) {
	this.name = name;
}

Person.prototype.talk = function() {
	console.log("Hi i'm " + this.name) 
}

Person.prototype.shout = function() {
	console.log("HI I'M " + this.name.toUpperCase() ) 
}

function createPerson(name) {
	return new Person(name);
}

var juanma = createPerson("juanma") // { name : "juanma" } => prototype of Person
var julian = createPerson("julian") // { name : "julian" } => prototype of Person

juanma.talk() // "Hi i'm juanma"
julian.talk() // "Hi i'm julian"
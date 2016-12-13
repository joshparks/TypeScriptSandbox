interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    
    fullName: string;
    
    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;    
    }
    
}

function greeter(person:Person) {
    return "Hello, " + person.firstName + " " + person.lastName;   
}

var user = { firstName: "Josh", lastName: "Parks" };

document.getElementById("NameDisplay").innerHTML = greeter(user);
class Person {

    private firstName   :string;
    private lastName    :string;
    private age         :number;
    
    constructor( firstName:string, lastName:string, age:number ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;    
    }
    
    public stateYourName = function():void {
        console.log("I am " + firstName + " " + lastName);
    }
    
}
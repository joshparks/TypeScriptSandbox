module Models {
    
    export class Person {
    
        private firstName: string;
        private lastName: string;
        private age: number;
        
        constructor(firstName:string, lastName:string, age:number) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;            
        }
        
        public logPerson():void {
            console.log("Person: (first) "+firstName+" (last) "+lastName+" (age) "+age);    
        }
        
    }
    
}
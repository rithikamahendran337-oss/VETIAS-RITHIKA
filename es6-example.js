//let
let studentcount=10;
studentcount=11;
console.log("studentcount",studentcount);

//const
const collegeName="VETIAS";
console.log("college Name:",collegeName);

//templet literals

let studentName="Rithika";
console.log(`welcome ${studentName} to ${collegeName}`)


//object
const student={
    name:"rithika",
    age:20,
    department:"CS&A",
}
console.log("student");


//Destructuring
const {name, age, department} = student;

console.log("Name:",name);
console.log("age:",age);
console.log("Department:",department);

//arrow function
const add =(a,b) => (a+b);
    console.log(add(4,4))

    //array
    const person=["rithi","riya","thara"]
    console.log(person[0]);

    //spread
    const updateperson=[...person,"sakye"];
    console.log(updateperson);
    
    







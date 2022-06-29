// const person = { 
//     firstName : 'Rit'
// }

// let val;

// val = person;


// // getting a value
// val = person.firstName;
// val = person['firstName']

// console.log(val)


const person = {
    firstName : 'moyin',
    lastName : 'oluwa',
    age : 14,
    email : 'moyin@gmail.com',
    hobbies : ['coding', 'writing'],
    address : {
        city : 'ogun',
        state :'Nigeria'
    }
}

let val;

val = person;

val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies[0];
val = person.address.state;
val = person.address['state'];


console.log(val);
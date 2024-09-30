// const baseSalary = 10000;
// const overtime = 8;
// const rate = 10;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + overtime * rate
// };

// getWage(baseSalary, overtime, rate); //...



// // ООП
// const employee = {
//     baseSalary: 1000,
//     overtime: 8,
//     rate: 10,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     }
// }

// employee.getWage();



// const animal = {
//     legs: 4,
// }
// const dog = Object.create(animal);
// dog.name = 'Бобік';
// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));


// const animal = {
//     eats: true,
// }
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//     console.log(key);
// }


// const animal = {
//     eats: true,
// }
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//     if(dog.hasOwnProperty(key)) continue;
//     console.log(key);
// }

// const dogKey = Object.keys(dog);
// console.log(dogKey); //['barks']



// class User{
//     name;
//     #email;
// constructor(name, email) {
//     this.name = name;
//     this.#email = email;
// }
// getEmail() {
//     return this.#email;
// }
// changeEmail(newEmail) {
//     this.#email = newEmail;
// }
// }

// const bob = new User('Bob', 'bob@ukr.net');
// console.log(bob);

// const alex = new User('Alex', 'alex@ukr.net');
// console.log(alex);

// const bob = new User({
//     name: 'Bob',
//     email: 'bob@ukr.net',
// })
// bob.changeEmail('newBob@ukr.net');
// console.log(bob.getEmail());
// console.log(bob.#email);


// class User{
//     #email;
// constructor({name, email}) {
//     this.name = name;
//     this.#email = email;
// }
// get email() {
//     return this.#email;
// }
// set email(newEmail) {
//     this.#email = newEmail;
// }
// }
// const bob = new User({
//         name: 'Bob',
//         email: 'bob@ukr.net',
//     })
//     console.log(bob.email);
//     bob.email = 'newBob@ukr.net';
//     console.log(bob.email);

// class User{
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//         return User.#takenEmails.includes(email);
//     }
//     #email;

//     constructor({ email }) {
//         this.#email = email;
//         User.#takenEmails.push(email);
//     }
// }
// const bob = new user({ email: 'bob@ukr.net' });
// console.log(bob); user //{#email: 'bob@ukr.net'}

// class Child extends Parent{

// }

class User{
    #email;
    constructor(email) {
        this.#email = email;
    }
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        this.#email = newEmail;
    }
}

class Admin extends user{
    //
}
const Admin = new Admin('admin@ukr.net');
console.log(admin);
console.log(admin.email);
// // split
// const message = "Welcome to Ukraine!"
// console.log(message.split(' '));  //['Welcome', 'to', 'Ukraine!']
// console.log(message.split(''));  //['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'U', 'k', 'r', 'a', 'i', 'n', 'e', '!']

// //join
// const names = ['Bob', 'Alex', 'Bill', 'Jhon'];
// console.log(names.join(' ')) //Bob Alex Bill Jhon
// console.log(names.join('*')) //Bob*Alex*Bill*Jhon

// //indexOf
// const namesNew = ['Bob', 'Alex', 'Bill', 'Jhon'];
// console.log(namesNew.indexOf('Jhon')); //3
// console.log(namesNew.indexOf('Ann')); //-1

// // includes
// const newNames = ['Bob', 'Alex', 'Bill', 'Jhon'];
// console.log(newNames.includes('Alex')); //True

// const fruit = 'apple';
// if (fruit === 'apple' || fruit === 'cherry') {
//     console.log('red');
// }

//  const red = ['apple', 'cherry', 'strawbery'];
//  const fruit = 'cherry';
//  if(red.includes('kiwi')){
//     console.log('red');
//  }

// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);

// const names = ['Bob', 'Alex', 'Bill', 'Jhon'];
// console.log(names.shift());
// console.log(names.shift());
// console.log(names);

// console.log(names.unshift('nick'))
// console.log(names)



// const names = ['Bob', 'Alex', 'Bill', 'Jhon'];
// console.log(names.slice(1, 3));
// console.log(names.slice(1));
// console.log(names.slice());
// console.log(names.slice(-3));


// const numbers = [1, 2, 3, 4, 5, 6];
// const deleted = numbers.splice(0, 3);
// console.log(numbers); //[4, 5, 6]
// console.log(deleted)


const names = ['Nick', 'Jhon', 'Sam', 'Bob'];
const newNames = ['Carl', 'Tom', 'Bill'];
const allNames = names.concat(newNames);
console.log(allNames); //['Nick', 'Jhon', 'Sam', 'Bob', 'Carl', 'Tom', 'Bill']


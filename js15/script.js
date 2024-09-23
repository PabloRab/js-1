// const numbers = [5, 4, 1, 9, 2, 7];
// console.log(numbers.sort());
// const letters = ['D', 'b', 'A', 'w', 'h'];
// console.log(letters.sort());

// const users = ['Nick', 'Bob', 'Jhon', 'Anna'];
// console.log(users.sort());


// const users = [
//     {name: 'Bob', daysActive: 14},
//     {name: 'July', daysActive: 3},
//     {name: 'Nick', daysActive: 30},
//     {name: 'Jhon', daysActive: 1},

// ]
// const sortByDays = (a, b) => b.daysActive - a.daysActive;
// console.log(users.sort(sortByDays));

// const goods = ['orange', 'apple', 'kiwi', 'banana'];
// goods.sort(function (a, b) {
//     return a.localeCompare(b)
// })
// console.log(goods);



// const numbers = [1, 5, 2, 3, 4, 7, 6, 9,];
// const even = numbers.filter(x => x%2 === 0);
// const doubled = even.map(x => x * 2);
// const reversed = doubled.reverse();
// console.log(reversed);



// const numbers = [1, 5, 2, 3, 4, 7, 6, 9,];
// const result = numbers
// .filter(x => x % 2 === 0)
// .map(y => y * 2)
// .reverse();
// console.log(result);



const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
  ];
  arr.sort(function(a, b) {return a.name.localeCompare(b.name)});
  console.log(arr)
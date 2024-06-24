const a = 20;
const b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Оператори порівняння
console.log(a > b);
console.log(a < b);
a >= b;
a <= b;
a == b;
a != b;
console.log(a === b);
console.log(a !== b);

// 5 == '5'; true
// 5 === '5'; false

0 == false;
0 === false;

const c = '20';
console.log(Number(c));

const d = 'qwe';
console.log(Number(d));
console.log(typeof Number(d));


console.log(Number.parseInt('10px'));
console.log(Number.parseInt('15qwe24'));
console.log(Number.parseInt('14.45qwe'));
console.log(Number.parseInt('qwe'));

console.log(Number.parseFloat('10px'));
console.log(Number.parseFloat('12qwe64'));
console.log(Number.parseFloat('12.24qwe'));



const x = Number('25');
console.log(Number.isNaN(x));

const y = Number('qweqwe');
console.log(Number.isNaN(y));
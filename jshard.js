let num = 266219;
let str = String(num);
let sum = 1;

for(let digit of str) {
    sum *= +digit;
}
sum **= 3;

let strs = String(sum);
console.log(strs.substring(0, 2));


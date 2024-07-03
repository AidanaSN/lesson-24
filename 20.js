let num = prompt("Введите число: ")
let arr = num.split('');

let count = 0;

for(let i = 0; i < arr.length; i++) {
    count = count + 1;
}
console.log(count);
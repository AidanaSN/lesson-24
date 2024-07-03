let arr = [5, 9, 3, 7, 2, 8, 1, 6, 4];

let sum = 0;
let avg;

for(let i = 0; i < arr.length; i++) {
    sum  = sum + arr[i];
    avg = sum / arr.length;
}
console.log(avg);
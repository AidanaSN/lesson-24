let arr = [1, 2, 3, 4, 3, 2, 1];

let del = 3;
let newArr = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] != del){
        newArr.push(arr[i]);
    }
}
console.log(newArr);
let arr = [1, 2, 3, 1, 2, 1];

let count = 0;

let newArray = arr[0]; // но работает только для определенного индекса


for(let i = 0; i < arr.length; i++) {
    if(arr[i] == newArray)
        count = count + 1;
}
console.log(count);
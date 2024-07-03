let arr = [5, 9, 3, 7, 2, 8, 1, 6, 4];

let min = arr[0];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= min){
        min = arr[i]; 
    }
}
console.log(min);

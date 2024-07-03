let arr = [1, 6, 3, 4, 5, 8];

let max = arr[0];//1

for(let i = 0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i] //2
    }
}
console.log(max);
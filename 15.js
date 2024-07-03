let arr =  [1, 1, 1, 1, 1];

let check = "1";
let isCheck = true;

for(let i = 0; i < arr.length; i++) {
    if(check != arr[i]){
        isCheck = false;
        break;
    }
}
if(isCheck) {
    console.log("True");
}
else {
    console.log("False");
}

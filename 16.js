let str = "radar";

let left = 0;
let right = str.length-1;


for(left = 0 ; left < right; left++) {
    if(str[left] != str[right]){
        console.log("Не палиндром");
        break;
    }
    right = right - 1;

    
}

if (!(left < right)) {
    console.log("Палиндром");
} 
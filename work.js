let arr = [4, 316, 3, -11, 35, 7];
let x = 2
let arrLen = arr.length;

for (let i = 0; i < arrLen; i++) {

if(arr[i] % 2 == 0) {
var arr2 = arr.splice(i, 1, 3);
console.log(arr);}

}



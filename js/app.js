let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(arr);
function even(el){
    return (el%2==0);
}
let double=arr.filter(even);
console.log(double);
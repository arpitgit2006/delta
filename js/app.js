let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(arr);
let double=arr.filter((el) => {
    return (el%2==0);
});
console.log(double);
console.log(arr.every((el)=>{
    return el%2==0;
}));
console.log(double.every((el)=>{
    return el%2==0;
}));
console.log(...arr);
let [first,second,third,...others]=arr;
console.log(first);
console.log(second);
console.log(third);
console.log(others);
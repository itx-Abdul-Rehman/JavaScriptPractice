// Find the sum of all numbers in an array using reduce()

let array=[1,1,1]

const callbackfun=(acc,value)=>{
     return acc+value;
}

let sum=array.reduce(callbackfun,0);
console.log(sum)
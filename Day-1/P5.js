// Merge two sorted arrays into one sorted array.

let array_a=[34,43,53,109,34,23,54,23]
let array_b=[64,56,2,19,105,32]
let array_c=[];

let temp=0;

for (let index = 0; index < array_a.length; index++) {
    for (let j = index + 1; j < array_a.length; j++) {
        if (array_a[index] > array_a[j]) {
           temp=array_a[index];
           array_a[index]=array_a[j];
           array_a[j]=temp;
        }
    }
     array_c[index]=array_a[index]
}

console.log(array_c)
let lengthofc=array_c.length;
console.log(lengthofc)

for (let index = 0; index < array_b.length; index++) {
    for (let j = index + 1; j < array_b.length; j++) {
        if (array_b[index] > array_b[j]) {
           temp=array_b[index];
           array_b[index]=array_b[j];
           array_b[j]=temp;
        }
    }
     array_c[lengthofc]=array_b[index]
     lengthofc++;
}


console.log(array_c)

for (let index = 0; index < array_c.length; index++) {
    for (let j = index + 1; j < array_c.length; j++) {
        if (array_c[index] > array_c[j]) {
           temp=array_c[index];
           array_c[index]=array_c[j];
           array_c[j]=temp;
        }
    }
}

console.log(array_c)
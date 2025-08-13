// Write a function to find the largest number in an array.

let array = [23, 54, 65, 2, 32, 12, 33]
let temp=0;

for (let index = 0; index < array.length; index++) {
    for (let j = index + 1; j < array.length; j++) {
        if (array[index] > array[j]) {
           temp=array[index];
           array[index]=array[j];
           array[j]=temp;
        }
    }
}

console.log(array[array.length-1])
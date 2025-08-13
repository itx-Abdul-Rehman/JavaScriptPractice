
//Write a function to reverse a string without using built-in reverse functions.

let input='abdulrehman'
let reverseinput='';
let i=0;

for (let index = input.length-1; index >=0 ; index--) {
     reverseinput +=input[index];
     i++;
}


console.log(reverseinput);
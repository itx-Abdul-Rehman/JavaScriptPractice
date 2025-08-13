// Check if a given string is a palindrome.

let input='madam'
let isPalindrome=false;
let reverse='';
let i=0;

for (let index = input.length-1; index >=0; index--) {
    reverse +=input[index];
    i++;
}

if(input===reverse){
    isPalindrome=true;
}

if(isPalindrome){
    console.log(input, 'is palindrome')
    return
}

 console.log(input, 'is not palindrome')
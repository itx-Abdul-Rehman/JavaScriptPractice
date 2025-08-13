// Find the factorial of a number using recursion.

const findFactorial=(num, factorial)=>{
   if(num==1){
    return factorial;
   }

   factorial=num*factorial;
   
   return findFactorial(num-1,factorial);
}



let factorial=1
let result= findFactorial(7,factorial);
console.log(result)


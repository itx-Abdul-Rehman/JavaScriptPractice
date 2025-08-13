// Remove duplicates from an array without using Set

let array_a=[1,1,2,2,3,3]

for (let index = 0; index < array_a.length; index++) {
    for (let j = index + 1; j < array_a.length; j++) {
         if(array_a[index]==array_a[j]){
            array_a.splice(j,1)
         }
    }
}

console.log(array_a)
// Write a function that flattens a nested array (e.g., [1, [2, [3]]] → [1,2,3])


let nested_arrys = [1, [2, [3,[6,[7]]]]]


const flatten_array = (nested_arrys,flat_array) => {
   
    for (let index = 0; index < nested_arrys.length; index++) {
        if (Array.isArray(nested_arrys[index])) {    
            flatten_array(nested_arrys[index],flat_array)
        } else {
            
            flat_array.push(nested_arrys[index])
        }
    }


}
 let flat_array = []
flatten_array(nested_arrys,flat_array)
console.log(flat_array)


// using  built-in function
console.log(nested_arrys.flat(Infinity)) 


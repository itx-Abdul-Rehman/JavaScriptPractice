function debounce(callback,delay){
  let timerid

  return function(...args){
    clearTimeout(timerid)
    timerid=setTimeout(() => {
        callback(...args)
    }, delay);
  }
}



function search(query){
    console.log(query)
}

let debounceSearch=debounce(search,500);

debounceSearch('p')
debounceSearch('pub')
debounceSearch('pubg')
function upArray(arr){
    let numStr = ''
    sort = arr.sort()
    arr.map(x => { 
      if(arr.length === 0 || Math.sign(sort[0]) === -1){
        return null
      } else {
        numStr += x.toString()
      }
    });
    arrA = parseInt(numStr) + 1 
    
    return [...arrA]
  }

  console.log(upArray([1,2,3,-4,5]))
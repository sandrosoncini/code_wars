function isIsogram(str){
    arr = str.toLowerCase().split('')
    if(str === ""){
        return true 
    }
    else if(arr.filter((item, index)=> arr.indexOf(item) !== index).length > 0){
        return false
    } else {
        return true
    }

  }



  console.log(isIsogram('isIsogram'))
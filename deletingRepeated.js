function deleteNth(arr,n){
    obj = {}
    newArr =[]
    for(let i = 0; i < arr.length; i++){
        obj.hasOwnProperty(obj[arr[i]]) ? obj[arr[i]] += 1 : obj[arr[i]] = 1 
    }
    for(key in obj){
        if((obj[key] - n ) >= 0){
            newArr.push()
            key = value - 1
            console.log(obj)
        }
    }
    return newArr
}

console.log(deleteNth([1,2,3,1,2,3,1,2,3]))
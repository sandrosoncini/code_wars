function findLongest(array){
    big = Math.max(...array).toString().length
    for(let i=0; i<array.length; i++){
        if(array[i].toString().length === big){
            return array[i]
        }
    }
}

console.log(findLongest([8, 900, 500]))
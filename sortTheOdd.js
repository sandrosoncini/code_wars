function sortArray(array) {
    Array.prototype.insert = function ( index, item ) {
        this.splice( index, 0, item );
    };
    
    newA = []
    secArr = []
    ele = 0
    for(let i =0; i< array.length; i++){
        if(array[i] % 2 != 0 && array[i] > ele){
            ele = array[i]
            newA.push(array[i])
        }else {
            secArr.insert(i, array[i]);
        } 
    }
    console.log(newA.sort())
    newA.sort().forEach(element => {
         secArr.push(ele)
    });

    
    return secArr

}

  console.log(sortArray([8,1,2,5,3,9]))
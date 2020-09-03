const solve = (str) => {
    Array.prototype.insert = function ( index, item ) {
        this.splice( index, 0, item );
    };

    let reverse = []
    let arr = str.split('')
    for(let i = arr.length-1;  i >= 0; i--){    
        if(arr[i] != ' '){
            reverse.push(arr[i])
        }
    }

    for (let i= 0; i<=arr.length; i++){
        if(arr[i] === ' '){
            reverse.insert(i, arr[i])
        }
    }
    
    

    return  reverse.join('')

    
}


console.log(solve("your code rocks"))
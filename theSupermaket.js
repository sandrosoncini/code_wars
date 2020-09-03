function queueTime(customers, n) {
    if( customers.length === 0 || n === 1){
        return customers.length
    }
    else if(customers.length < n){
        max = Math.max(...customers) 
        return max
    }

    for(let  i =0; i < customers.length; i++){
        repeat
    }
    
   
  }

  console.log(queueTime([1,2,3,4,5], 100))
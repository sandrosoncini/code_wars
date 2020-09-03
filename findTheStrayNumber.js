function stray(numbers) {
    if(numbers[0] != numbers[1] ) {
        return   numbers[0] 
    } else if (numbers[numbers.length-1] != numbers[numbers.length-2]){
       return  numbers[numbers.length - 1] 
    }
    
    for(let i = 0; i< numbers.length; i++){
       if (numbers[i] != numbers[i + 1] && numbers[i +1] != numbers[i + 2]) {
          return numbers[i + 1]
      }
    }

}

console.log(stray([1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1]))


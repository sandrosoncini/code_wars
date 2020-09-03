Math.round = function(number) {
   arr = (number).toString().split("")
   ceil = false;
   let a = '';
   if(parseInt(number) === number){
       return number
   }
   for (let i = 0; i < arr.length; i++){
       if (arr[i] === '.'){
           if(arr[i + 1] <= 4){
                break;
           }
           else if(arr[i + 1] <= 9 && arr[i + 1] >= 5){
                ceil = true;
                break;
           }
       } else {
           a += arr[i]
       }
   } 
   if (ceil){
       parse = parseInt(a)
       return parse + 1
   }else {
        return parseInt(a);
   }
};
  
  Math.ceil = function(number) {
    arr = (number).toString().split("");
    a = '';
    if(parseInt(number) === number){
        return number
    }
    for (let i = 0; i < arr.length; i++){
    if (arr[i] === '.'){
        break 
    } else {
        a += arr[i]
    }
    
  } 
  return parseInt(a) + 1
}
  
  Math.floor = function(number) {
    arr = (number).toString().split("");
    a = '';
    if(parseInt(number) === number){
        return number
    }
    for (let i = 0; i < arr.length; i++){
    if (arr[i] === '.'){
        break 
    } else {
        a += arr[i]
    }
    
  } 
  return parseInt(a)
  };

console.log(Math.round(10))
console.log(Math.ceil(100.9))
console.log(Math.floor(100.9))
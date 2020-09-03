function isSortedAndHow(array) {
    return array.every(function (x, i) {
     if (i === 0 || x >= array[i - 1]){
       return 'ascending '
     }else if (i === 0 || x <= array[i - 1]){
       return 'desc'
     } 
   });
}



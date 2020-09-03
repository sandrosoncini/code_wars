function minValue(values){
     newSet = new Set (values)
     noDuplicates = [...newSet]
     str = ''
     number = 1
     noDuplicates.sort().forEach(ele => {
         if (ele >= number ){
             str += ele
             number = ele
         }       
     });
     return str
   
  }

  console.log(minValue([1, 3, 1]), typeof minValue([4,2,5,6,7,1,3,2,1]))
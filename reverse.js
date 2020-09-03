function reverse(str){
    newString = str.split(' ')
    reversing = ''
    for(let i =0; i < newString.length; i++){
        if(i % 2 !== 0){
            reversing += `${newString[i].split('').reverse().join('')} `
        }else {
            reversing += `${newString[i]} `
        }
    }
 return reversing.trim()
   
}

console.log(reverse("I really don't like reversing strings!"))
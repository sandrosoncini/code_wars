function isPangram(str){
    alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    a= str.replace(/ /g,'').split('')
    let contain;
    for(let i = 0; i < alpha.length; i++){
        if(a.includes(alpha[i])|| a.includes(alpha[i].toUpperCase())){
            contain = true
        }else {
            return false
        }
    }
    return contain
    
}

console.log(isPangram("The quick brown fox jumps over the lazy dog" ))
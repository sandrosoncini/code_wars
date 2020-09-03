function dashatize(num) {
    str = num.toString()
    fullString = ""
    for(let i = 0; i < str.length; i++){
        if((str[str.length - 1] == str[i] && str[i]%2 !== 0) ){
            fullString += `-${str[i]}`
        }else if ( str[0] == str[i] && str[i]%2 !== 0){
            fullString += `${str[i]}-`
        }
        else if (str[i] && str[i]%2 !== 0){
            fullString += `-${str[i]}-`
        } 
    }
    return fullString
}

  console.log(dashatize(345))
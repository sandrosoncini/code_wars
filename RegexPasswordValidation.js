

function validate(password) {
    arr = password.split('')
    let toUpper;
    let toLower;
    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
    arr.forEach(ele => {
        if(ele === ele.toUpperCase() && ele !== ele.toLowerCase()){
            toLower = true
        }
        if(ele === ele.toLowerCase() && ele !== ele.toUpperCase()){
            toUpper = true
        }
      
       
    });


    if (password.length >= 6 ){ 
      if(toUpper){
        if(toLower){
          if (/\d/.test(password)){
            if((iChars.match(/\W/g)) === ""){
              return true
            }
          }
        }
      }
    }else {
      return false
    }
      
  }

  console.log(validate('aaaA!AA11'))
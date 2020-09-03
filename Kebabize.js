// 1 - convert string into array - ok 
// 2 - loop array to find camel cases 
// 3 - add dahs before each camel case adn replace upper case to lowercase 

function kebabize(str) {

    let arr = str.split('')
    newStr = ''
    arr.forEach(element => {
        element === element.toUpperCase()? newStr += `-${element.toLowerCase()}`: newStr +=`${element}`
    });
    return newStr
  }

  console.log(kebabize('camelsHaveThreeHumps'))
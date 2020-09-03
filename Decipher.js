// given a string \
// second and the last letter of each word are swcthd 
// first letter od each word is replace  by its char code - ok

// 1 - convert string into array
// String.fromCharCode(72)

function decipherThis(str) {
    let arr= str.split(' ');
    let newStr = ''

    for (let i = 0; i < arr.length; i++){
        num = arr[i].match(/\d+/g)
        code = String.fromCharCode(num)
        word = arr[i].replace(num, '')
        chars = word.replace( word[word.length -1],word[0])
        console.log('chars:', chars)
        sChars= chars.replace(chars[0],word[word.length-1])
        console.log('----->:', sChars)
        newStr +=`${code}${sChars} `
    }

    return newStr.toString()
}; 
const  sent= '72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'


console.log(decipherThis(sent))
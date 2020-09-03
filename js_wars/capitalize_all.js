String.prototype.toJadenCase = function () {
    let newStr = ""
     this.split(' ').forEach(ele => {
        newStr += ele.charAt(0).toUpperCase() + ele.slice(1) + " "
   })
   return newStr.trim()
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase())
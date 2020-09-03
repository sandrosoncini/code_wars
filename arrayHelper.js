

Array.prototype.square = function square() {
    
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push((this[i] * this[i]));
    }
    return newArray;

}
Array.prototype.cube = function cube() {
    
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push((this[i] * this[i]* this[i]));
    }
    return newArray;

}
Array.prototype.average = function average() {
    if(this.length === 0){
        return NaN
    }
    ave = 0 
    for (let i = 0; i < this.length; i++) {
        ave += this[i];
    }
    return (ave / this.length)

}

Array.prototype.sum = function sum() {
    
    s = 0
    for (let i = 0; i < this.length; i++) {
        s += this[i]
    }
    return s

}
Array.prototype.even = function even() {
    
    e = []
    for (let i = 0; i < this.length; i++) {
        if(this[i] % 2 === 0){
            e.push(this[i])
        }
    }
    return e

}
Array.prototype.odd = function odd() {
    
    o = []
    for (let i = 0; i < this.length; i++) {
        if(this[i] % 2 != 0){
            o.push(this[i])
        }
    }
    return o

}


const arr = [1, 2, 3, 4, 5];


console.log('square: ', arr.square())
console.log('cube: ', arr.cube())
console.log('average: ', arr.average())
console.log('sum: ', arr.sum())
console.log('even: ', arr.even())
console.log('odd: ', arr.odd())
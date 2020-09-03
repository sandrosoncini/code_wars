
function solution(string) {
    s = ""
    for (let i = 0; i < string.length; i++){
        new_s = string[i + 1]
        console.log(new_s.toUpperCase())
        // if (string[i+1].toUpperCase()){
        //     s += `${string[i]} `
        // }
        // else {
        //     s += string[i]
        // }
    }
    return s;
}
console.log(solution('camelCasing'))

console.log("c".toUpperCase())
function highestRank(arr){
    count = {}
    arr.map(ele => count[ele] ? count[ele]++ : count[ele] = 1 )
    init = 0;
    for (key in count){
        if (count[key] > init){
            init = count[key]
        }else if (count[key])
    }
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12] ))
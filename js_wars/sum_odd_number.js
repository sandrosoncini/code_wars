function rowSumOddNumbers(n) {
    var totalNumberOfRows = n;
    var output = '';
    for (var i = 1; i <= totalNumberOfRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + ' ';
            
        }
        console.log(output);
        output = '';
    }
}

console.log(rowSumOddNumbers(5))
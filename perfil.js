function generatePyramid() {
  var totalNumberOfRows = 4;
  var output =""
  for (var i = 0; i < totalNumberOfRows; i++) {
      for (var j = 0; j < totalNumberOfRows; j++) { 
        output +="# "
      }
      output +="# \n"
  }
  console.log(output)
}

generatePyramid();
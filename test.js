const genObj = require('./generator')
function myFunction() {
  console.log("generator() Called");
  genObj();
}

// myFunction();

// setInterval(function(){
//   myFunction()
// }, 1000)

let testVar = setInterval(function () {
  myFunction();
}, 3000);



function stopFunction() {
  clearInterval(testVar);
}


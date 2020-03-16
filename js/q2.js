'use strict'
var starArrFinal = [];
var starArr=['*'];
var starList;
function printStarPattern() {
  for (var s = 0; s < 5; s++) {
    for (var i = 0; i < starArr.length; i++) {
    starArrFinal.push(starArr[i]);
    }
    console.log(starArrFinal);
}
// console.log(starArrFinal); 

}
printStarPattern();

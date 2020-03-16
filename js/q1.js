'use strict'
var arrOfNums= [];
var num;
var answerArr=[];
function greaterThan(arrOfNums,num){
    
    for (var i=0 ; i<arrOfNums.length; i++){
        if (arrOfNums[i]>num){
            answerArr.push(arrOfNums[i]);
        }

    }
    console.log(answerArr);
}
greaterThan([15,17,19,30,25,20],17);
var start1 = 0;
var limit1 = 10;
while(start1 <= limit1){
    console.log(start1)
    start1++
}

console.log("----------");

var start2 = 0;
var limit2 = 15;
while(start2 <= limit2){
    if (start2 % 2 != 0){
        console.log(start2)
    }
    start2++
}

console.log("----------");

var start3 = 0;
var limit3 = 20;
var oddSum = 0;
while(start3 <= limit3){
    if (start3 % 3 == 0){
        oddSum = oddSum + start3
    }
    start3++
}
console.log(oddSum)

console.log("----------");

var start4 = 0;
var limit4 = 100;
var evenCount = 0;
var evenSum = 0;
while(start4 <= limit4){
    if (start4 % 2 == 0){
        console.log(start4)
        evenSum = evenSum + start4;
        // console.log(evenSum)
        evenCount++
    }
    start4++
}
console.log(evenSum/(evenCount-1))
// console.log(evenCount)
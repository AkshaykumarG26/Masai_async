var arr = [9,6,4,2,3,10]
var oddsum = 0;
var evensum = 0;
for (var i = 0;  i < arr.length; i++){
    if (i % 2 == 0){
        evensum = evensum + arr[i]
    }else if (i % 2 == 1){
        oddsum = oddsum + arr[i]
    }
}
console.log("EvenSum - " + evensum);
console.log("OddSum - " + oddsum);

var k = 5
console.log(evensum^k);
console.log(oddsum^k)


var arr1 = [1,1,0,0,0,0,0,1,0,0];
var emptyArr = [];
for (var i = 2; i < arr1.length; i++){
    emptyArr.push(arr1[i])
}   
console.log(emptyArr)
var zeros = 0;
var ones = 0;
for (var i = 0; i < emptyArr.length; i++){
    if (emptyArr[i] == 0){
        zeros++
    }else{
        ones++
    }
}
console.log(zeros);
console.log(ones);
console.log(zeros-ones)
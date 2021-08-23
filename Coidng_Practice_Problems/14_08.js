// Binary to Decimal
var binary = 10001
var ak = ''
binary = ak + binary;
// console.log(binary)
var emptyArr = []
var binaryStr = binary.toString()
// console.log(binaryStr)
for (var i = binaryStr.length-1; i >= 0; i--){
    console.log(Number(binaryStr[i]))
    var b = Number(binaryStr[i]);
    // var dec = (2**b)
    // console.log(dec)
    emptyArr.push(b)
    
}
for (var j = emptyArr.length-1; j >= 0; j--){
    console.log(emptyArr[j])
}
// console.log(emptyArr)


var a = [1,2,3,4]
for (var k = 0; k < a.length; k++){
    console.log("K ",a[k])
}
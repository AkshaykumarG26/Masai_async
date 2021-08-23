function sliceArray(arr,sliceValue){
var newArr = []
for (var i = sliceValue; i < arr.length; i++){
    // console.log(arr[i])
    newArr.push(arr[i])
}
console.log(newArr)
}

var arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var sliceValue = 2
sliceArray(arr,sliceValue)
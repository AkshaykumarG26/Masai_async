function arrayLastIndex(arr,indexValu){
for (var i = 0; i < arr.length; i++){
    if (indexValue == i){
        // console.log(arr[i])
        return arr[i]
    }
}
}

var arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var indexValue = 0;
console.log(arrayLastIndex(arr,indexValue))
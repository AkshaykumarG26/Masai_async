function arrayInclude(arr, check){
var flag = false
for (var i = 0; i < arr.length; i++){
    var check;
    if (arr[i] == check){
        // console.log("Yes")
        flag = true
    }
}
if (flag == true){
    // console.log(true)
    return true
}else{
    return false
    // console.log(false)
}
}

var arr = ['ABD','kse','kdd'];
var checkvalue = 'AxD'
console.log(arrayInclude(arr,checkvalue))
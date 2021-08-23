function lowerCase(str){
    var lower = 'abcdefghijklmnopqrstuvwxyz ';
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    var st = '';
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < upper.length; j++){
            if (str[i] == upper[j]){
                st += lower[j]// + '\n'
                // console.log(st)
            }
        }
    }
    return st
}

function upperCase(str){
    var lower = 'abcdefghijklmnopqrstuvwxyz ';
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    var st = '';
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < lower.length; j++){
            if (str[i] == lower[j]){
                st += upper[j]// + '\n'
                // console.log(st)r
            }
        }
    }
    return st
}

function swapCase(swapStr){
    var arr = []
    var a = lowerCase(swapStr)
    var b = upperCase(swapStr)
    // console.log(a+b)
    arr.push(a)
    arr.push(b)
    console.log(arr.join(""))

}

// console.log(lowerCase("Test"))
// console.log(upperCase("Test"))

swapCase("Test")
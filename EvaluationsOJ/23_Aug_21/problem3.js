function check(str,need) {
    var emptyArr = [];
    for (var i = 0; i < str.length; i++){
        for (var j = i+1; j <= str.length; j++){
            var result = '';
            for (var k = i; k < j; k++){
                result = result + str[k]
            }
            emptyArr.push(result)
        }
    }
    // console.log(emptyArr)

    var flag = false
    for (var i = 0; i < emptyArr.length; i++){
        if (emptyArr[i] == need){
            flag = true
        }
        
    }

    if (flag) {
        return true
    } else {
        return false
    }
    
}

console.log(check("Nrupul",'pul'))

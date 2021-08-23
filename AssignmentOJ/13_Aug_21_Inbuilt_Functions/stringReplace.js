function myreplace(string, oldWord, newWOrd){
    var arr = [];
    var emptyStr = '';
    for (var i = 0; i < string.length; i++){
        if (string[i] !== " "){
            emptyStr = emptyStr + string[i];
        }else if (emptyStr.trim()){
            arr.push(emptyStr);
            emptyStr = '';
        }
    }
    if (emptyStr){
        arr.push(emptyStr);
    }
    // console.log(arr)
    for (var j = 0; j < arr.length; j++){
        if (arr[j] == oldWord){
            arr[j] = newWOrd
        }
    }
    console.log(arr.join(" "))
}

var rep = 'dog is there'
myreplace(rep, 'dog', 'cat')

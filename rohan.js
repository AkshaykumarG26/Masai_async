var str = 'python';
for (var i = 0; i < str.length; i++){
    var emptyStr = '';
    for (var j = i; j < str.length; j++){
        emptyStr = emptyStr + str[j]

    }
    // emptyStr = ''
    console.log(emptyStr)
}
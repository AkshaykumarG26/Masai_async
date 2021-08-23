function stringSubString(string,start,end){
    var str = '';
    if (start == Number && end == Number){
    for (var i = start; i < end-1; i++){
        str = str + string[i]

    }
}else if(start == Number){
    for (var j = start; j < string.length; j++){
        str = str + string[j]
    }
}
    console.log(str)
}

var string = "MasaiSchool"
stringSubString(string,3,6)
stringSubString(string,4,9)

string.substring
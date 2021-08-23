function myTrim(string){
    var count = 0
    var returnValue = ''
    for (var i = 0; i < string.length; i++){
        if (string[i] !== " "){
            count++
        }
        if (count){
            returnValue += string[i]
        }
    }
    return returnValue
}
console.log(myTrim("       starting spaces are removed   |"));

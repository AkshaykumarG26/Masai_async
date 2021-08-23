function makeLowerCase(str){
    var lowers = "abcdefghijklmnopqrstuvwxyz "
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    var out = '';
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < uppers.length; j++){
            if (str[i] == uppers[j] || str[i] == lowers[j]){
                out = out + (lowers[j])
            }
        }
    }
    return out
}

function makeLowerCaseString(string){
    var arr = [];
    for (var i = 0; i < string.length; i++){
        var out = []
        var res = makeLowerCase(string[i])
        out.push(res);
        arr.push(out);
    }
    var result = arr.join(" ");
    var str = '';
    var result = str + result
    console.log(result.split(" "))
}
console.log("Using Function")
makeLowerCaseString(["MA", "SA", "I", "SCH", "OOL"])
console.log("----------------------------------")

// console.log(makeLowerCaseString('AKS'))
// 1st Approach
console.log("Withou Function 1st Apporach")
var strings = ["MA", "SA", "I", "SCH", "OOL"]
var arr = []
for (var i = 0; i < strings.length; i++){
    var outArr = []
    var res = makeLowerCase(strings[i])
    // console.log(res)
    outArr.push(res)
    arr.push(outArr)
    // console.log(outArr)
}
var n = arr.join(" ")
var s = ''
var n = s + n;
console.log(n.split(' '))
console.log("----------------------------------")


// 2nd Approach
console.log("Withou Function 2nd Apporach")
var result1 = []
for (var i = 0; i < arr.length; i++){
    var store = ''
    if (arr[i] !== " "){
        store = store + arr[i];
        result1.push(store);
    }
}
console.log(result1)
console.log("----------------------------------")

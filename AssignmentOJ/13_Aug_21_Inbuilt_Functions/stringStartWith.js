function startWith(string, check){
var len = check.length
var count = 0;
for (var i = 0; i < string.length; i++){
    var flag = false;
    for (var j = 0; j < check.length; j++){
        if (string[i] == check[j]){
            // count = count + 1
            flag = true
        }
    }
}
// console.log(count)
if(flag == true){
    console.log("Yes")
}else{
    console.log("No")
}
}
startWith("Saturday", "Sat")
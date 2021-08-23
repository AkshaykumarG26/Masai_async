var n = 5
    var lowers = ' abcdefghijklmnopqrstuvwxyz'
    var chars = {}
    for (var i = 1; i < n; i++){
            chars[lowers[i]]=i
        // console.log(chars)
    }
        for (keys in chars){
            console.log(keys + "-" + chars[keys])
        }
    

// obj(5)
var N = 5
var al = ' abcdefghijklmnopqrstuvwxyz';
  var char = {}
 for(var j=1;j<=N;j++){
    char[al[j]]=j;
 }
  for(key in char){
    console.log(key + "-"+ char[key]);
  } 
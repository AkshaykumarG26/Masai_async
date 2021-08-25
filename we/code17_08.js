var names = "akshaykumar"
var details = {}
for (i=0; i<names.length; i++) {
    var char = names[i]
   if (details[char]==undefined) {       
        details[char] = 1
  } else {
        var prev = details[char]
       details[char] = prev + 1
  }
}
 for (k in details) {
 console.log(k+"-"+details[k])
 }


var names = ["A","B","C","A","B","C"]
var details = {}
for (i=0; i<names.length; i++) {
    details[names[i]] = "a"
    //console.log(details)
}
console.log(Object.keys(details))

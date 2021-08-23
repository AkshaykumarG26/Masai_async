function mapChar(N) {
    // Write code here
    var lowers = ' abcdefghijklmnopqrstuvwxyz';
    var obj = {}
    for (var i = 1; i <= N; i++){
        obj[lowers[i]] = i;
    }
    for (keys in obj){
        console.log(keys + "-" + obj[keys])
    }
}
// mapChar(4)

function mapCharAgain(N) {
    var lowers = " abcdefghijklmnopqrstuvwxyz"
     var num = N + 26
     var obj = {}
    // console.log(num)
     for (i = 1; i < lowers.length; i++) {
         for (j = N; j < num; j++) {
             if (i==j-(N-1)) {
            obj[lowers[i]] = j
             } 
         }   
 }
for (k in obj) {
  console.log(k + "-" + obj[k])
     }
}

// mapCharAgain(30)

function mapCharAndSum(N,K,str) {
    var lowers = " abcdefghijklmnopqrstuvwxyz"
    var Num = N + 26
    var details = {}
    for (i = 1; i < lowers.length; i++) {
        for (j = N; j < Num; j++) {
            if (i == j-(N-1)) {
           details[lowers[i]] = j
            } 
        }
}
// console.log(details)
var sum = 0
for (k = 0; k < str.length; k++) {
    var val = str[k]
   sum = sum + details[val]
}
console.log(sum)
}

// mapCharAndSum(30,3,'abc')

function mapNumbers(N,K){
    var obj = {}
    for (i = 1; i <= N; i++) {
        obj[i] = i
        obj[i] = K++
    }
    for (k in obj) {
        console.log(k + "-" + obj[k])
    }
  }
// mapNumbers(5,10)


function mapSymbols(N) {
    var arr = ['!','@','#','$','%','^','&','*']
    var obj = {}  
    for (i = 0; i < arr.length; i++) {
      obj[arr[i]] = arr[i]
      obj[arr[i]] = N++
      N++
    }
    for (key in obj) {
      console.log(key + "-" + obj[key])
    }
  }
  mapSymbols(20)
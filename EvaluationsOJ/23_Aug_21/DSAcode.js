function encryptionScheme(N,array){
    //write code here
    var sum = 0;
    var count = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] == 1){
            count++
            // console.log("Count-",count)
            sum = sum + i;
            // console.log("i-",i)
        }
    }
    console.log(sum+count)
    // console.log(count)
    
}
// encryptionScheme(5,[0,1,0,1,0])


function verifyPal(N,str1,str2){
    //write code here
    var newString = str1+str2
    // console.log(newString)
    var checkString = '';
    for (var i = newString.length-1; i >= 0; i--){
        checkString = checkString + newString[i]
        // console.log()
    }
    // console.log(checkString)
    if (newString == checkString){
        console.log("yes")
    }else{
        console.log("no")
    }
}
// verifyPal(4,'abba','abba')


function oddSumSubArr(N,arr){
    //write code here
    function sum (array) {
        var out = 0
        for (i = 0; i < array.length; i++) {
          out = out + array[i]
        }
        return out
      }

    var req = []
    for (i = 0; i < arr.length; i++) {
        for (j = i+1; j <= arr.length; j++) {
            var c = arr.slice(i,j)
            req.push(c)
   }
 }
//  console.log(req)
 var count = 0
 for (j=0; j<req.length; j++) {
   var d = sum(req[j])
   if (d%2!==0) {
     count++
   }
 }
 console.log(count)
}
oddSumSubArr(3,[1,2,3])


function patternPrintingII(N) {
    // Write code here
    for (var i = 0; i < N; i++){
        var str = '';
        for (var j = 0; j < N; j++){
            if (i == N-1){
                str = str + "* "
            }else {
            if (j == 0 || j == N-1){
                str = str + "* "
            }else{
                str = str + "  "
            }
        }
    }
    console.log(str)
}
}
// patternPrintingII(5)
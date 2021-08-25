function applyBasicMaths(N,A){
    var sum = 0
    for (i = 0; i < A.length; i++) {
      sum = sum + A[i]
    }
    //  console.log(sum)

    var emptyArr = []
      for (i = 0; i < A.length; i++) {
       if ((sum - A[i]) % 7 == 0) {
        emptyArr.push(A[i])
      } 
    }
    // console.log(emptyArr)

    if (emptyArr.length==0) {
      console.log(-1)
    } else {
      var minvalue = emptyArr[0]
        for (i = 0; i < emptyArr.length; i++) {
            if (emptyArr[i]<minvalue) {
                minvalue = emptyArr[i]
            }
        }
    // console.log(minvalue)

    for (i = 0; i < A.length; i++) {
        if (minvalue==A[i]) {
            console.log(i)
        }
    }
  }
}
applyBasicMaths(5, [14,7,8,2,4])


function sumOfSpecialPairs(N,A){
    function prime(num) {
        var sum = 0
        for(var i=0;i<num;i++){
            if(num%i==0){
                sum++;
            }
        }
        // console.log(sum);
        if(sum==1){
            // console.log("yes");
            return true
        }else{
            // console.log("no");
            return false
        }
    }
    
    var sum = 0
    //console.log( prime(11))
    for (i = 0; i < A.length; i++) {
        // console.log("I -",A[i])
        for (var j = i+1; j < A.length; j++){
            // console.log("J -", A[j])
            // console.log(checkPrime(j-i))
            if (prime(j-i) == true && i < j){
                sum = sum + Math.abs(A[i] - A[j])
            }
        }
    }
    console.log(sum)
  
  }
// sumOfSpecialPairs(8,[5, 12, 32, 11, 4, 56, 5, 0])


function masaiPalSubString(S){minvalue
    function checkPalindrome(string) {
        var emptyStr = ""
        for (i = string.length - 1; i >= 0; i--) {
          emptyStr = emptyStr + string[i]
        }
        return emptyStr
      }

    var emptyArr = []
    for (i = 0; i < S.length; i++) {
        for (j = i+1; j <= S.length; j++) {
            var out = S.slice(i,j)
            //console.log(out)
            emptyArr.push(out)
        }
    }
    // console.log(emptyArr)

    var arr = [] 
    for (k = 0; k < emptyArr.length; k++) {
        //console.log((emptyArr[k]))
        if (emptyArr[k] == checkPalindrome(emptyArr[k])) {
            var len = emptyArr[k].length;
            arr.push(len)
        }
    }
    // console.log(arr)

    var max = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
console.log(max)
}
// masaiPalSubString("thisracecarisgood")


function findPairs(N,M,arr){
    //write code here
    var count = 0
    for (var i = 0; i < N; i++){
        for (var j = i+1; j < N; j++){
            if (arr[i]*arr[j] == M){
                count++
            }
        }
    }
    console.log(count)
}
// findPairs(5,4,[3,2,2,1,5])


function binaryString2(N,str){
    //write code here
    var emptyArr = [];
    for (var i = 0; i < N; i++){
        for (var j = i+1; j < N; j++){
            var string1 = str.slice(i,j)
            emptyArr.push(string1)
        }
    }
    // console.log(emptyArr)

    function strSplit(stringFromEmptyArr) {
        var count = 0;
        var arr = stringFromEmptyArr.split("").map(Number);
        for (var k = 0; k < arr.length; k++){
            if (arr[k] == 1){
                count++
            }
        }
        // console.log(count)
        if (count == arr.length){
            return arr
        }
        
    }
    
    // console.log(strSplit(emptyArr))

    var arr2 = [];
    for (var l = 0; l < emptyArr.length; l++){
        if (strSplit(emptyArr[l])){
            arr2.push(emptyArr[l])
        }
    }
    // console.log(arr2)
    var max = 0;
    for (var m = 0; m < arr2.length; m++){
        if (arr2[m].length > max){
            max = arr2[m].length
        }
    }
    console.log(max)
}
// binaryString2(6,'000000')



function sumOfOddNos(N,arr){
    //write code here
    var oddSum = 0;
    for (var i = 0; i < N; i++){
        if (arr[i] % 2 == 1){
            oddSum = oddSum + arr[i]
        }
    }
    console.log(oddSum)
}
// sumOfOddNos(3,[1,2,3])


function matrixNonPrimeCheck(N, M, arr) {
    //write code here
    var arr1 = [];
    for (var i = 0; i < N; i++){
        for (var j = 0; j < M; j++){
                arr1.push(arr[j][i])
            //  var nums = arr[i][j]
        }
    }
    // console.log(arr1)

    function prime(num) {
        var count = 0;
        for (var i = 2; i < num; i++){
            if (num%i == 0){
                count++
            }
        }
        if (count == 2){
            return true
        }
    }
    var count1 = 0;
        for (var k = 0; k <= arr1.length; k++){
            if (prime(arr1[k])){
                count1++
            }
        }
        console.log(count1)
        // console.log(arr1.length - count1)
    
  }
  
  matrixNonPrimeCheck(3, 3,[[1, 2, 3],[4, 5, 6],[7, 8, 9]])


function oddSumColumns(N,M,arr){
    //write code here
    for (var i = 0; i < N; i++){
        var sum = 0;
        for (var j = 0; j < M; j++){
            if (arr[j][i] % 2 !== 0){
                // console.log(arr[j])
                sum = sum + arr[j][i]

                // arr1.push(sum)
            }
        }
        console.log(sum)
    }
}
// oddSumColumns(3, 3,[[1, 2, 3],[4, 5, 6],[7, 8, 9]])
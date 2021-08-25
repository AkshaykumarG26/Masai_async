function array2D(N,M,arr){
    //write code here
    var r = N
    var c = M
    for (var i = 0; i < r; i++){
        var emptyArr = []
        for (var j = 0; j < c; j++){
            // console.log(arr[i][j])
            emptyArr.push(arr[i][j])

        }
        console.log(emptyArr.join(" "))
    }
}
// array2D(3,2,[[1,2],[3,4],[5,6]])

function sumOfRows(N,M,arr){
    //write code here
    for (var i = 0; i < N; i++){
        var sum = 0
        for (var j = 0; j < M; j++){
            sum = sum + arr[i][j]
        }
        console.log(sum)
    }
}

function sumOfIndexes(N,M,arr){
    //write code here
    var sum = 0
    for (var i = 0; i < N; i++){
        var arr = []
        for (var j = 0; j < M; j++){
            sum = Number([i]) + Number([j])
            arr.push(sum)
        }
        console.log(arr.join(' '))
    }
    // console.log(sum)
}


function evenSumRows(N,M,arr){
    //write code here
    var sum = 0;
    for (var i = 0; i < N; i++){
        for (var j = 0; j < M; j++){
            if (arr[i][j] % 2 == 0){
                sum = sum + arr[i][j]
            }
        }
        console.log(sum)
    }
}


function oddSumRows(N,M,arr){
    //write code here
    var sum = 0;
    for (var i = 0; i < N; i++){
        for (var j = 0; j < M; j++){
            if (arr[i][j] % 2 != 0){
                sum = sum + arr[i][j]
            }
        }
        console.log(sum)
    }
}


function vowelsInRows(N,M,arr){
    //write code here
    var flag = false
    for (var i = 0; i < N; i++){
        for (var j = 0; j < M; j++){
            if (arr[i][j] == 'a' && arr[i][j] == 'e' && arr[i][j] == 'i' && arr[i][j] == 'o' && arr[i][j] == 'u'){
                flag = true
            }
        }
        if (flag){
            console.log("Yes")
        } else {
            console.log("No")
        }
        flag = false
    }
}


function evenSumColumns(N,M,arr){
    //write code here
    var sum = 0
    for (var i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
          if (arr[j][i] % 2 == 0) {
           sum = sum + (arr[j][i])
        // console.log(arr[j][i])
    }
}
console.log(sum)  
    sum = 0
    }
}
// evenSumColumns(3,3,[[1,2,3],[4,5,6],[7,8,9]])


function oddSumColumns(N,M,arr){
    var sum = 0
    for (var i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
          if (arr[j][i] % 2 != 0) {
           sum = sum + (arr[j][i])
            }
      }
     console.log(sum)  
    
    }
}

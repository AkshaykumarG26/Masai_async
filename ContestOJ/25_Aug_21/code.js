function traverse2dArray(N, M, matrix){
    //write code here


    var arr = []
    for (var i = 0; i < M; i++){
        var res = ''
        for (var j = N-1; j >= 0; j--){
            res = res + matrix[j][i] + " "
            // arr.push(matrix[j][i])
            // console.log(matrix[j][i])
        }
        arr.push(res)
    }
    console.log(arr.join(""))
}


function traverse2dArray(N, M, matrix){
        //write code here
        var arr = [];
        for (var i = M-1; i >= 0; i--){
            var res = ''
                for (var j = 0; j < N; j++){
            // console.log(matrix[j][i])
            res = res + matrix[j][i] + " "
        }
        arr.push(res)
    }
    console.log(arr.join(''))

}

traverse2dArray(4, 3,[[1, 8, 9], [2, 7, 10], [3, 6, 11], [4, 5, 12]])



function goInZigZag(N, M, matrix){
    //write code here
    var arr = [];
    for (var i = 0; i < N; i++){
        var out = '';
        if (i % 2 == 0){
            for (var j = M-1; j >= 0; j--){
                // console.log(matrix[i][j])
                arr.push(matrix[i][j])
        }
        }else if (i % 2 !== 0){
            for (var j = 0; j <= M-1; j++){
                arr.push(matrix[i][j])
            }
        }
    }
    console.log(arr.join(' '))
  
}
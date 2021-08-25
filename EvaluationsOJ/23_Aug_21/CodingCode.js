function mapCharAndCompare(N, str, K) {
    //write code here
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    var object_store = {};
    for (var i = 0; i < lowers.length; i++){
        object_store[lowers[i]] = i;
    }
    console.log(object_store)
    var sum = 0;
    for (var i = 0; i < str.length; i++){
        var char = str[i];
        sum = sum + object_store[char]
    }
    console.log(Number(sum))
    // console.log(typeof(sum))

    if (sum > K){
        console.log("True");
    }else{
        console.log("False")
    }

  }

  mapCharAndCompare(8,"deaeommaih",64)
//   'dpgasoev',82

function sumOf2D(N,M,arr){
    //write code here
    var row = N;
    var column = M;
    var arr1 = [];
    for (var i = 0; i < row; i++){
        var sum = 0;
        for (var j = 0; j < column; j++){
            sum = sum + arr[i][j]
        }
        // console.log(sum)
        arr1.push(sum)
    }
    
    // console.log(arr1)
    var total = 0
    for (var i = 0; i < arr1.length; i++){
        total = total + arr1[i]
    }
    console.log(total)
}
// sumOf2D(3,2,[[1,2],[3,4],[5,6]])
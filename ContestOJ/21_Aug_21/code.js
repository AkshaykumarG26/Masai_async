function intersectionOfArray(N, arr1, arr2){
    //write code here
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                console.log(arr1[i])
            }
        }
    }
}
// intersectionOfArray(3,[4,5,7],[9,2,5])

function identifyPrime(num) {
    // Write code here
    var count = 0;
    for (var i = 1; i <= num; i++){
        if (num % i == 0){
            count++
        }
    }
    console.log(count)
    if (count == 2){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
identifyPrime(13)
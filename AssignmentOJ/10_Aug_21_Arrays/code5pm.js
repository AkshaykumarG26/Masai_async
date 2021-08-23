function printArray(N,arr){
    //write code here
    for (var i = 0; i < N; i++){
        console.log(arr[i]);
    }
}
// printArray(5,[1,2,3,4,5])

function reverseArrayTraversal(n, arr){
    //write code here
    var newArr = []
    for (var i = n-1; i >= 0; i--){
        // console.log(arr[i]);
        newArr.push(arr[i])

    }
    console.log(newArr.join(" "))
}
// reverseArrayTraversal(5,[1,2,3,4,5])


function maximumInArray(N,arr){
    //write code here
    var max = arr[0]
    for (var i = 0; i <= N; i++){
        if (max < arr[i]){
            max = arr[i]
        }
    }
    console.log(max)
}
// maximumInArray(5,[1,2,3,4,5])

function minimumInArray(N,arr){
    //write code here
    var min = arr[0]
    for (var i = 0; i <= N; i++){
        if (min > arr[i]){
            min = arr[i]
        }
    }
    console.log(min)
}
// minimumInArray(5,[1,2,3,4,5])


function evenArray(n, arr){
    //write code here
    for (var i = 0; i < n; i++){
        if (arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }
}
// evenArray(5,[1,2,3,4,5])

function oddArray(n, arr){
    //write code here
    for (var i = 0; i < n; i++){
        if (arr[i] % 2 != 0){
            console.log(arr[i])
        }
    }
}
// oddArray(5,[1,2,3,4,5])

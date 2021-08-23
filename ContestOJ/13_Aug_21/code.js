function smallestAndLargestOfAll(n, arr){
    //write code here
    var small = arr[0];
    var large = arr[0];
    for (var i = 0; i <= arr.length; i++){
        if (small > arr[i]){
            small = arr[i]
            // break
        }else if (large < arr[i]){
            large = arr[i]
        }
    }
    console.log(small)
    console.log(large)
}
// smallestAndLargestOfAll(4,[-2, 0, 8, 4])


function averageOfAll(n, arr){
    //write code here
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        // console.log(arr[i])
        count++
    }
    console.log(sum/count)
    // console.log(sum)
}
// averageOfAll(4,[2,5,0,9])



function battleOfOddAndEven(n, arr){
    //write code here
    var evenSum = 0;
    var oddSum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            evenSum = evenSum + arr[i];
            // console.log(evenSum)
        }else if (arr[i] % 2 != 0){
            oddSum = oddSum + arr[i]
            // console.log(oddSum)
        }
    }
    if (evenSum > oddSum){
        console.log("Even");
    }else if (oddSum > evenSum){
        console.log("Odd")
    }else{
        console.log("Even")
    }
}
// battleOfOddAndEven(4,[1,2,3,4])



function competeWithNeighbour(n, arr){
    //write code here
    var count = 0;
    // console.log(arr[arr.length-1])
    if (arr.length == 2){
        console.log(1)
    }else{
        if (arr[1] == 0){
            count++
        }
        if(arr[arr.length-1] == 0 || arr[arr.length-2] < arr[arr.length-1]){
            count++
        }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[i+1] && arr[i] > arr[i-1]){
            count++
        }
    }
          console.log(count)
      }  
}

competeWithNeighbour(8,[2, 0, 4, 9, 2, 0, 3, 5, 0, 9, 8, 10])


function longQueue(n, arr){
    //write code here
    var count = 1;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] <= arr[i]+1){
        }else{
            count++
        }
    }
    console.log(count)
}
// longQueue(3,[1,2,4])


function negativity(size,arr) {
    //write code here
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            count++
        }
    }
    console.log(count)
}
// negativity(5,[-3,0,-5,9,8])

function unitsConsumed(n) {
    //write code here
    var Total_Units;
    var n = n - 80;
    // console.log(n)
    if(n > 650){
        Total_Units = (n - 650) / 10;
        Total_Units = Total_Units + 150
    } else if(n >= 150){ 
        Total_Units = (n-150) / 5;
        Total_Units = Total_Units + 50
    } else if(n <= 150){
        Total_Units = n/3
    }
    console.log(Total_Units)   
}



function equalTo42(size,arr) {
    //write code here
    var flag = false
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 42){
            // console.log("Yes")
            flag = true
        }
    }
    if (flag){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
// equalTo42(5,[3,7,0,9,8])

function smallestAndLargestOfAll(n, arr){
    //write code here
    var small = arr[0];
    var large = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (small > arr[i]){
            small = arr[i]
        }else if (large < arr[i]){
            large = arr[i]
        }
    }
    console.log(small);
    console.log(large)
}
// smallestAndLargestOfAll(4,[-2,0,8,4])
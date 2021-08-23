function arrayAverage(arr){
    if (arr.length > 0){
        var sum = 0;
        var count = 0;
        for (var i = 0; i < arr.length; i++){
            sum = sum + arr[i];
            count++
        }
        var average = sum/count
        return average
    }else{
        return 0
    }
}
console.log(arrayAverage([]))
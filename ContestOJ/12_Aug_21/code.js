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
// unitsConsumed(455)


function equalTo42(size,arr) {
    //write code here
    var count = false;
    for (var i = 0; i <= arr.length; i++){
        if (arr[i] === 42){
            count = true
        }
    }
    if (count == true){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
// equalTo42(5,[42,7,0,2,1])


function breakingTheRecord(n, m) {
    //write code here
    if (n < m){
        console.log("Broken");
    }else if(n > m){
        console.log("Not Yet");
    }else{
        console.log("Wao")
    }
}
// breakingTheRecord(264,264)

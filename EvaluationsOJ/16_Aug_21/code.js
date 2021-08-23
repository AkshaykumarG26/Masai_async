function findTheThief(N, A, B, C) {
    //write code here
    if (A > N){
        // console.log("Person_A");
        return "Person A";
    }else if (B > N){
        // console.log("Person_B");
        return "Person B";
    }else if (C > N){
        // console.log("Person_C");
        return "Person C";
    }else{
        // console.log("Not found");
        return "Not found"
    }
  }
  
// console.log(findTheThief(31000,30000,43000,12000))



function birthdayChocShopping(M,N){
    //write code here
    if (N/5 >= M){
        console.log("Dairy Milk")
    }else{
        if (N/2 >= M){
            console.log("Shots")
        }else if (N/1 >= M){
            console.log("Eclairs")
        }else{
            console.log("No Chocolates")
        }
    } 
}
// birthdayChocShopping(15,100)



function niceArrayII(N, array, K) {
    //write code here
    var returnValue = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 == 1){
            returnValue++
        }
    }
    if (returnValue > K){
        console.log("Nice Array");
    }else if (returnValue < K){
        console.log("Bad Array")
    }
    
  }
// niceArrayII(5,[1,2,3,4,5],2)


    function splitInHalf(A,B,K){
        var i = A+B; 
        var j = A-B; 
        var k = A-K; 
        var l = B-K; 

        if (i == K || j == K || k == B || l == A){
            console.log("YES")
        }else{
            console.log("NO")
        }
    }
splitInHalf(5,10,15)
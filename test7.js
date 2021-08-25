
//   sumOfSpecialPairs(8,[5, 12, 32, 11, 4, 56, 5, 0])
  


// prime(4)


function prime(num) {
    if (num<=1) {
      return false
    } 
    var sum1 = 0
    for (i=2; i<(num); i++) {
         if (num%i==0) {
           sum1++
         }
    }
    //console.log(sum)
    if (sum1<=2) {
      return true
    } else {
      return false
    }
  }


  function primevani(num) {
    var sum = 0
    for(var i=0;i<num;i++){
        if(num%i==0){
            sum++;
        }
    }
    // console.log(sum);
    if(sum==1){
        // console.log("yes");
        return true
    }else{
        // console.log("no");
        return false
    }
}
primevani(12)
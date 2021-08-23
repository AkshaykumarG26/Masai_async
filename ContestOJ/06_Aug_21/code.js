
function cubesAndSquares(a,b) {
    //write code here
    var sum1 = (a**2)+10
    var sum2 = (b**3)+12
    console.log(sum1+sum2)
}
// cubesAndSquares(2,3)



function twoAndThree(num) {
    // Write code here
    for (var i = 1; i <= num; i++){
        if (i % 2 == 0 && i % 3 == 0){
            console.log('both')
        }else if (i % 2 == 0){
            console.log('two')
        }else if (i % 3 == 0){
            console.log('three')
        }else if (i % 2 != 0 || i % 3 != 0){
            console.log("none")
        }
    }

}
// twoAndThree(6)


function primeNumberReverse(N) {
    // Write code here
    for (var i = 1; i <= N; i++){
        var out = "";
        for (var j = N; j >= 1; j--){
            out = out + j + ' '
        }console.log(out)
    }
}
// primeNumberReverse(4)


function twoPrimes(a,b) {
    //write code here
    // for ()
    var count = 0;
  	for (var i = 1; i <= a; i++){
      if (a % i == 0){
        count++;
      }
    }
    var count1 = 0;
  	for (var i = 1; i <= b; i++){
      if (b % i == 0){
        count1++;
      }
    }
    if (count1 == 2 && count == 2){
        console.log("True")
    }else{
        console.log("False")
    }

}
// twoPrimes(11,17)



function patternOfL(N) {
    // Write code here
    for (var i = 1; i <= N; i++){
        var out = "";
        for (var j = N; j >= 1; j--){
            if (i == N || j == 1){
            out = out + "*" + ' '
        }
        }console.log(out)
    }
}

// patternOfL(4)

function dotsAndDashes(N) {
    // Write code here
    for (var i = 1; i <= N; i++){
        var out = "";
        for (var j = N; j >= 1; j--){
            if (i % 2 == 0){
            out = out + "*" + ' '
        }else{
            out = "_"
        }
        }console.log(out)
    }
}
// dotsAndDashes(6)
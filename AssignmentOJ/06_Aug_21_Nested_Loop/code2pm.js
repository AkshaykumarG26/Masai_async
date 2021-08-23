function yourFirstNested(num) {
    // Write code here
    // var count = 0;
    for (var i = 1; i <= num; i++){
        var out = "";
        for (var j = 1; j <= num; j++){
            out = out + j + ' '
        }console.log(out)
    }
}

// yourFirstNested(4)


function yourFirstPattern(n) {
    // Write code here
    for (var i = 1; i <= n; i++){
        var out = '';
        for (j = 1; j <= n; j++){
            out = out + "*" + ' '
        }console.log(out)
    }
}
// yourFirstPattern(5)

function anotherNested(num) {
    // Write code here
    for(var i = 1; i<=num ; i++){
        var out =  ""
                for(var j=1;j<=i; j++){
            console.log(j)
             }
        }
}
// anotherNested(4)

function evenSumAgain(num) {
    // Write code here
    for(i = 1; i <= num; i++){
        var evenSum = 0;
        for(j = 1; j <= i; j++){
        if(j % 2 == 0){
          evenSum = evenSum + j;
        }
        }
       console.log(evenSum);
      
    }
}
// evenSumAgain(4)

function oddSumAgain(num) {
    // Write code here
    for (var i = 1; i <= num; i++){
        var oddSum = 0;
        for (var j = 1; j <= i; j++){
            if (j % 2 != 0){
                oddSum = oddSum + j
            }
        }
        console.log(oddSum)
    }
}
// oddSumAgain(4)


function patternPrinting(N) {
    // Write code here
    var out = '';
    for (var i = 1; i <= N; i++){
        out = out + '*'
        console.log(out)
    }
}
// patternPrinting(3)


function patternOfN(N) {
    // Write code here
    var count = 0;
    for (var i = 1; i <= N; i++){
        var out = '';
        for (var j = 1; j <= N; j++){
            count++
            out = out + count + " "
        }console.log(out)
    }
}
// patternOfN(4)

function reverseTheValue(num) {
    // Write code here
    var out = ''
    var count = '';
    out = out + num;
    for (var i = out.length-1; i >= 0; i--){
        count = count + out[i]
        // console.log(out[i])
    }
    console.log(count)
}

// reverseTheValue(122)

function dotsAndDashesII(N) {
    // Write code here
    for (var i = 1; i <= N; i++){
        var out = '';
        for (var j = 1; j <= N; j++){
            if (i % 2 == 0){
                out = out + "*"
            }else{
                out = out + "_"
            }
        }console.log(out)
    }
}
// dotsAndDashesII(3)

function invertedL(N) {
    // Write code here
    for (var i = 1; i <= N; i++){
        var out = '';
        for (var j = 1; j <= N; j++){
            if (i == 1 || j == N){
                out = out + "*" + " "
            }
        }console.log(out)
    }
}

// invertedL(4)


function secondMaximum(a, b, c) {
    // write code here
    if (a < b && a > c){
        console.log(a);
    }else if (b < c && b > a){
        console.log(b)
    }else{
        console.log(c)
    }
  }
// secondMaximum(3,7,5)


function rangeOfTwo(left, right) {
    //write code here
    for (var i = left; i <= right; i = i*2){
        console.log(i)
    }
  }
// rangeOfTwo(4,8)

function reverseTheValue(num) {
    // Write code here
    var out = num.toString()
    var count = '';
    // out = out + num;
    for (var i = out.length-1; i >= 0; i--){
        count = count + out[i]
        // console.log(out[i])
    }
    console.log(count)
}
// reverseTheValue(237823)


var num = 273;
var out = num.toString();
// console.log(out)
for (var i = 1; i <= out.length; i++){
    for (var j = 1; j <= i; j++){
        console.log(j)
    }
}


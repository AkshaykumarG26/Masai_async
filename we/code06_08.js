// Print Calendar
for (var i = 1; i <= 12; i++){
    var days = 31;
    if (i == 2 ){
        days = 28
    }else if (i == 4 || i == 6 || i == 9 || i == 11){
        days = 30
    }
    for (var j = 1; j <= days; j++){
        console.log(j + "-" + i)
    }
}
console.log("---------")
console.log("---------")


// Prime number till given limit
var limit = 100;
for (var num = 1; num <= 100; num++){
    var count = 0;
    for (var i = 1; i <= num; i++){
        if (num % i == 0){
            count++
            // console.log(count)
        }
    }
    if (count == 2){
        console.log(num)
    }
}
console.log("---------")
console.log("---------")


// Box Pattern
for (var i = 1; i <= 10; i++){
    var out = '';
    for (var j = 1; j <= 10; j++){
        if (i == 1 || i == 10){
            out = out + "*"
        }else{
            if (j == 1 || j == 10){
                out = out + '*'
            }else{
                out = out + " "
            }
        }
    }
    console.log(out)
}
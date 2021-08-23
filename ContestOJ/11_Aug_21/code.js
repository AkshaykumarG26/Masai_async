function sumRelatedProblem(N) {
    // Write code here
    var sum = 0
    for (var i = 0; i <= N; i++){
        if (i % 2 == 0){
            sum = sum + i
        }
    }
    console.log(sum)
}
// sumRelatedProblem(4)

function divisionTask(N) {
    // Write code here  
    // console.log(32/N)
    if (N == 0){
        console.log("-1")
    }
    if (N > 0 && N <= 32){
    var out = Math.floor(32/N)
    console.log(out)
}else if (N != 0){
    console.log("Too Low")
}
    
}
// divisionTask(0)

function masaiSchoolHurray(N) {
    // Write code here
    for (var i = 1; i <= N; i++){
        if (i % 5 == 0 && i % 7 == 0){
            console.log("Masai School")
        }else if (i % 5 == 0){
            console.log('School');
        }else if (i % 7 == 0){
            console.log("Masai");
        }else{
            console.log("Hurray!")
        }
    }
}
masaiSchoolHurray(7)
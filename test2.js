// https://oj.masaischool.com/contest/1361/problem/205
function runProgram(input) {
    var arr = input.trim().split("\n");
    var arr1 = arr[1].split(" ").map(Number)
    var newArri = []
    var newArrj = []
    for (var i = 0; i < arr1.length; i++){
        if (i % 2 == 0 && arr1[i] % 2 == 0){
            newArri.push(i)
            newArrj.push(arr1[i])
        }    
    }
        console.log(Number(newArri[0]),Number(newArri[1]))
        // console.log(typeof(newArri))
        console.log(Number(newArrj[0]),Number(newArrj[1]))
        // console.log(typeof(newArrj))
}
  if (process.env.USER === 'akshra') {
    runProgram(`5\n2 1 4 3 5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
// Divisible by K
function divisibleByK(num,k) {
    //write code here
    for (var i = 1; i <= num; i++){
        if (i % k == 0){
            console.log(i)
        }
    }
}
// divisibleByK(7,2)

// Divisible by KII
function divisibleByKII(num,k) {
    //write code here
    var sum = 0;
    for (var i = 1; i <= num; i++){
        if (i % k == 0){
            // console.log(i)
            sum = sum + i
        }
    }
    console.log(sum)
}
// divisibleByKII(7,2)

// Masai Divisors
function masaiDivisors(left, right, k) {
    //write code here
    var count = 0
    for (var i = left; i <= right; i++){
        if (i % k == 0){
            count++
        }
    }
    console.log(count)
}
// masaiDivisors(1,10,3)

// Find Sum of Multiples
function sumOfMultiples(n,k,y) {
    //write code here
    var sum = 0;
    for (var i = 1; i <= k; i++){
        var multiple = i * n;
        // console.log(multiple)
            if (multiple % y == 0){
                sum = sum + multiple;
            }
        
    }
    console.log(sum)
}
// sumOfMultiples(3,10,5)

// Fizz Buzzz
function fizzBuzz(num) {
    // Write code here
    for (var i = 1; i <= num; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("Fizz");
        }else if (i % 5 == 0) {
            console.log("Buzz");
        }else{
            console.log(i)
        }
    }
}
// fizzBuzz(3)

// Identify Prime
function identifyPrime(num) {
    // Write code here
  	var count = 0;
  	for (var i = 1; i <= num; i++){
      if (num % i == 0){
        count++;
      }
    }
  	if (count == 2){
      	console.log("Yes");
    } else{
      console.log("No");
    }
}
identifyPrime(13)
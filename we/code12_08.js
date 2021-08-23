// Create a function to check if a number is Prime or Not
// Use the above function to print the Primes from 2 to a given limit
// Use the same function to print Non-Primes from 2 to a given limit
// Write a function to check if the char is a small case or not
// Write a function to replace spaces in a given string with -

function isPrime(num){
    var count = 0;
    for (var i = 1; i <= num; i++){
        if (num % i == 0){
            count++;
        }
    }
    if (count == 2){
        return true;
    }else{
        return false;
    }
}
// console.log(isPrime(5))
var limit = 50;
for (var i = 2; i <= limit; i++){
    var prime = isPrime(i)
    // console.log("I = " + i + " Prime = " + prime)
    if (prime){
        console.log("Primes -",i)
    }
}

var limit = 50;
for (var i = 2; i <= limit; i++){
    var prime = isPrime(i)
    // console.log("I = " + i + " Prime = " + prime)
    if (!prime){
        console.log("Non Primes -",i)
    }
}

function isSmallCheckChar(char){
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i <= lowers.length; i++){
        if (char == lowers[i]){
            return true
        }
    }
    return false
}
console.log(isSmallCheckChar("A"))

function repalceSpaces(str){
    var out = '';
    for (var i = 0; i < str.length; i++){
        if (str[i] == " "){
            out = out + "-";
        }else{
            out = out + str[i];
        }
    }
    return out;
}
console.log(repalceSpaces("Masai School"))
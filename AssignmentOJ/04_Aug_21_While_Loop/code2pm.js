// Print Masai School
function printMasaiSchool(num) {
    // Write code here
  	var a = 0;
  	while(a < num){
      console.log("Masai School")
        a++
        
      }
}
// printMasaiSchool(5);

// Loop 1 to N
function loop1toN(num) {
    // Write code here
    var b = 1
  	while(b <= num){
          console.log(b)
          b++;
      }
}
// loop1toN(5)

// From A to B
function fromAtoB(max,min){
    //write code here
  	var c = min;
    while(c < max){
        console.log(c);
        c++
    }
}
// fromAtoB(19,13)

// Multiplication Table of N
function multiplicationTableN(num) {
    // Write code here
    var d = 1
    while (d <= 10){
        console.log(d*num);
        d++
    }
}
// multiplicationTableN(3)


function moveTwoAhead(num) {
  // Write code here
  var count = 0;
  while(count <= num){
    if (count % 2 != 0){
      console.log(count);
    }
    count++
    // break
  }
  
}
// moveTwoAhead(13)

function moveTwoAheadII(num) {
  // Write code here
  var count = 1;
  while(count <= num){
    if (count % 2 == 0){
      console.log(count);
    }
    count++
    // break
}
}
// moveTwoAheadII(12)

function evenSumBelowN(num) {
  // Write code here
  var count = 0;
  var sum = 0;
  while(count <= num){
    if (count % 2 == 0){
      sum = sum + count;
    }
  count++
  }
  console.log(sum)
}
// evenSumBelowN(6)

function oddSumBelowN(num) {
  // Write code here
  var count = 0;
  var sum = 0;
  while(count <= num){
    if (count % 2 != 0){
      sum = sum + count;
    }
  count++
  }
  console.log(sum)
  
}
// oddSumBelowN(7)


function modeof10(num) {
  // Write code here
  // var X = num % 10;
  var c = 1;
  while(c <= num){
    console.log(c%10);
    c++
  }
}

// modeof10(7)
function patternOfL(N) {
    // Write code here
    for (var i = 1; i <= N; i++){
        var out = "";
        for (var j = N; j >= 1; j--){
            if (i == N || j == 1){
            out = out + "*" + ' '
        }else if (j == 1 || i == 1){
            out = out + "*" + ' '
        }else if (j == N-1){
            out = out + "*" + ' '
        }
        }console.log(out)
    }
}
// patternOfL(4)



// https://learn.masaischool.com/app/assignment/3171/963
// function patternPrinting(N) {
//     // Write code here
//     var out = '';
//     var n = N.toString()
//     for (var i = 1; i <= N.length; i++){
//         out = out + j + 0
//         console.log(out)
//     }
// }
// patternPrinting(273)



function CheckNum(N){
    var sum = ''
    var sum = sum + N
  var len = sum.length;
  console.log(len)
  for (i=len-1; i>=0; i--) {
    var str = ""
   if (len-1-i<=0) {
     console.log(sum[i])
   } else {
     for (j=1; j<=len-1-i; j++) {
      str = str + 0;
       }
       console.log(sum[i]+str)
     }
     
   }
  
  }
  
//   CheckNum(273)


var num = 273;
var numstr = ""
numstr = numstr + num
for (var i = 0; i < numstr.length; i++){
    var str = '';
    if (numstr.length-1 <= 0){
        console.log(numstr[i])
    }else{
        for (var j = numstr.length; j > 0; j--){
            if (i-1 >= 0){
            str = str + 0;
        }
        }
        console.log(numstr[i]+str)
    }
}



const splitString = (str) => {
    let resultArray = [];              //1
    let tempString = '';               //2
    for(var i = 0; i< str.length;i++){ //3
        if(str[i] !== ' '){            //4
          tempString += str[i];        //5
         } else{                       
          resultArray.push(tempString);//6
          tempString = "";             //7
        }
    }
    return resultArray;                //8
 }


var names = 'Masai transformation in education'
var arr = [];
var tempstr = '';
for (var i = 0; i < names.length; i++){
    if (names[i] !== " "){
        tempstr = tempstr + names[i];
    }else if (tempstr.trim()){
        arr.push(tempstr)
        tempstr = '';
    }
    // console.log(arr)
}
    if (tempstr){
        arr.push(tempstr)
    }
console.log(arr)


var arr = [12,23,42,2]
var count = false;
for (var i = 0; i <= arr.length; i++){
    if (arr[i] === 42){
        count = true;
    }
}
if (count == true){
    console.log("Yes")
}else {
    console.log("No")
}


var arr = [1,-2,-3,-4,-1]
var small = arr[0];
var large = arr[0];
for (var i = 0; i < arr.length; i++){
    if (small > arr[i]){
        small = arr[i]
    }else if (large < arr[i]){
        large = arr[i]
    }
}
console.log("small", small)
console.log('large', large)




var str = '294320';
var catche = false
for (var i = 0; i <= str.length; i++){
    if (str[i] == 4 && str[i+1] == 2 && str[i+2] == 0){
        // console.log("Catch")
        catche  = true
    }
}
if (catche == true){
    console.log("Catch")
}else{
    console.log("Drop")
}


var str = "Masai School";
var vowel = ''
var conso = '';
for (var i = 0; i < str.length; i++){
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        vowel = vowel + str[i]
        // console.log(vowel)
    }else{
        conso = conso + str[i]
    }
}

console.log("Vowels = ",vowel)
console.log("Consos = ", conso)




//Enter code here




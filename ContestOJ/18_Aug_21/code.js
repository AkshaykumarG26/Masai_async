function catch420(n) {
    //write code here
    var str = '';
    n = str + n
    // console.log(n)
    var flag = false
    for (var i = 0; i < n.length; i++){
        if (n[i] == 4 && n[i+1] == 2 && n[i+2] == 0) {
            flag = true
        }
    }
    if (flag){
        console.log("Caught")
    }else{
        console.log("Escaped")
    }
  
  }
//   catch420(26364)


function countConsonants(s) {
    //write code here
    var count = 0;
    for (var i = 0; i < s.length; i++){
        if (s[i] != 'a' && s[i] != 'e' && s[i] != 'i' && s[i] != 'o' && s[i] != 'u' && s[i] != 'A' && s[i] != 'E' && s[i] != 'I' && s[i] != 'O' && s[i] != 'U'){
            count++
        }
    }
    console.log(count)
  
  }
//   countConsonants("masaischool")

function masaiSentenceReverse(s) {
    //write code here
    var str = s.split(" ");
    var emptyArr = []
    for (var i = str.length; i >= 0; i--){
        emptyArr.push(str[i])
    }
    console.log(emptyArr.join(" ").trim())   
}
// masaiSentenceReverse("A Transformation in education")

function longestIncSubArr(n, A) {
    //write code here
    var count = 0
    if (A.length == 1){
        count = 1
    }
    for (var i = 0; i < A.length; i++){
        if (A[i] < A[i+1]){
            count++
        }
    }
    console.log(count)
  }
longestIncSubArr(6,[1,2,1,2,3,1])

  
  
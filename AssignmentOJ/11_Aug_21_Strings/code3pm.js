function printCharReverse(N,str) {
    //write code here
    for (var i = str.length; i > 0; i--){
        console.log(str[i])
    }

}

function charAtOddPos(N, str){
    for (var i = 0; i < N; i++){
        if (i % 2 == 1){
            console.log(str[i])
        }
    }
}
// charAtOddPos(6,'ankush')

function charAtEvenPos(N, str){
    for (var i = 0; i < N; i++){
        if (i % 2 == 0){
            console.log(str[i])
        }
    }
}
// charAtEvenPos(6,'ankush')


function checkVowel(N, str) {
    //write code here
    var count = 0
    for (var i = 0; i < N; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            // console.log('true')
            count++
        }
    }
    if (count>0){
        console.log("true")
    }else{
        console.log("false")
    }
  }
// checkVowel(4,'stvr');

function vowelAndConsonantCount(N, str) {
    //write code here
    var vowel = 0
    var conso = 0
    for (var i = 0; i < N; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            // console.log('true')
            vowel++
        }else{
            conso++
        }

    }
    console.log(vowel,conso)
    
  }
// vowelAndConsonantCount(6,'ankush')


function checkPalindrome(N, str) {
    //write code here
    var out1 = '';
    var out2 = '';
    for (var i = 0; i < N; i++){
        out1 = out1 + str[i]
    }
    for (var j = N-1; j >= 0; j--){
        out2 = out2 + str[j]
    }
//   console.log(out1)
//   console.log(out2)
  if (out1 == out2){
      console.log("Yes")
  }else{
      console.log("No")
  }
}
// checkPalindrome(6,'nrupul')



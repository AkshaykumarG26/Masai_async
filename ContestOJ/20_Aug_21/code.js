function stringValue(S) {
    //write code here
    var empty = " "
    S = empty + S
    // console.log(S)
    var lowers = ' abcdefghijklmnopqrstuvwxyz';
    var sum = 0;
    for (var i = 0; i < S.length; i++){
        // console.log(i)
        for (var j = 0; j < lowers.length; j++){
            if (S[i] == lowers[j]){
                sum = sum + j
            }
        }
        
    }
    console.log(sum)
  
  }
// stringValue('aba')

function decompressString(string) {
    //write code here
    for (var i = 0; i < string.length; i++){
        // console.log(string[i])
        if (string[i] == Number(string[i])){
            console.log(string[i])
            
        }
    }

}
decompressString("a3b2")


function anagramDetector(S1,S2){
    //write code here
    
    var str1 = S1.split("").sort().join("").trim();
    // console.log(str1)
    var str2 = S2.split("").sort().join("").trim();
    // console.log(str2)
    if (str1 == str2){
        console.log("True");
    }else{
        console.log("False")
    }
    
}
// anagramDetector("anagram", "nag a ram")

function countSuchPairs(N,K,A){
    //write code here
    var count = 0
    for (var i = 0; i < A.length; i++){
        // console.log("I",A[i])
        for (var j = i; j < A.length; j++){
            // console.log("J",A[j])
            if (A[i]+A[j+1] == K){
                count++
            }
        }
    }
    console.log(count)

}
// countSuchPairs(5,9,[3,0,6,2,7])

function productOfNumbers(N, arr) {
    //write code here
    var product = 1;
    for (var i = 0; i < N; i++){
        product = product * arr[i]
    }
    console.log(product)
  }
// productOfNumbers(4,[1,2,3,4])
  

function productOfEvenIndexes(N, arr) {
    //write code here
    var product = 1;
    for (var i = 0; i < N; i++){
        if (i % 2 == 0){
            product = product * arr[i]
        }
    }
    console.log(product)
  }
  
function productOfOddIndexes(N, arr) {
    //write code here
    var product = 1;
    for (var i = 0; i < N; i++){
        if (i % 2 !== 0){
            product = product * arr[i]
        }
    }
    console.log(product)
  }



function vowelHalf(N, str) {
    //write code here
    var len = N/2;
    var count = 0;
    for (var i = 0; i < N; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            count++
        }
        // console.log(count)
    }
    if (count > len){
        console.log("True")
    }else{
        console.log("False")
    }
}
// vowelHalf(6,'aabefe')

function playOf4and6(N) {
    // Write code here
    if (N % 4 == 0 &&N % 6 == 0){
        console.log("Awesome!")
    }else if (N % 4 == 0){
        console.log("Four!")
    }else if(N % 6 == 0){
        console.log("Six!")
    }else{
        console.log("Dark!")
    }
}
// playOf4and6(12)


function compareVowelsConsonants(N, str) {
    //write code here
    var vowelCount = 0;
    var consoCount = 0
    for (var i = 0; i < N; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            vowelCount++
        }else{
            consoCount++
        }
        // console.log(count)
    }
    if (consoCount > vowelCount){
        console.log("Consonant")
    }else if (vowelCount > consoCount){
        console.log("vowel")
    }else if (vowelCount == consoCount){
        console.log("Tie")
    }
  }
  
// compareVowelsConsonants(6,'nrupul')


function patternPrinting3(N){
    //write code here
    var str = ''
    for (var i = 0; i < N; i++){
        str = str + "*"
        console.log(str)
        for (var j = 0; j < N; j++){
        }
    }
}

patternPrinting3(4)

function productOfRows(N,M,arr){
    //write code here
    for (var i = 0; i < N; i++){
        var productArr = []
        var product = 1;
        for (var j = 0; j < M; j++){
            product = product * arr[i][j]
        }
        productArr.push(product)
        console.log(productArr.join(" "))
    }
}

productOfRows(3,2,[[1,2],[3,4],[5,6]])


function mapSymbolsSum(N, str) {
    //write code here
    var str1 = "!@#$%^&*";
    var sum = 0;
    for (var i = 0; i < N; i++){
        for (var j = 0; j < str1.length; j++){
            if (str[i] == str1[j]){
                // console.log(str1[j])
                // console.log(j+1)
                sum = sum + j+1
            }
        }
    }
    console.log(sum)
  }

// mapSymbolsSum(4,'!@#$')



function twoStringsFromOne(N, str) {
    //write code here
    var conso = '';
    var vowel = '';
    for (var i = 0; i < N; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            vowel = vowel + str[i]
        }else{
            conso = conso + str[i]
        }
  }
  console.log(vowel);
  console.log(conso)
}
// twoStringsFromOne(6,'nrupul')



function productOfColumns(N,M,arr){
    //write code here
    for (var i = 0; i < M; i++){
        var productArr = []
        var product = 1;
        for (var j = 0; j < N; j++){
            product = product * arr[j][i]
        }
        productArr.push(product)
        console.log(productArr.join(" "))
    }
    
}

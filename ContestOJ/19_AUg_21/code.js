// Check Palindrome

function detectPalindrome(num){
    //write code here
    var str = '';
    num = str + num;
    var str1 = '';
    var str2 = '';
    for (var i = num.length-1; i >= 0; i--){
        str2 = str2 + num[i]
        // console.log(str2)
    }
    if (num === str2){
        console.log("Yes")
    }else
    {
        console.log("No")
    }
}
detectPalindrome(1221)


function subStrUnderCond(s){
    //write code here
    
}
    
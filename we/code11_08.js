// Given a string count the number of words in that string

var givenString1 = 'Akshay Amol Akash Amit Rishi';
var count = 0;
if (givenString1.length > 0){
for (var i = 0; i < givenString1.length; i++){
    if (givenString1[i] == " "){
        count++
    }
}
console.log((count+1) + " Words")
}else{
    console.log(0 + "Words")
}


// Given a string in lower case convert it to upper case

var givenString2 = "masai school";
var lower = "abcdefghijklmnopqrstuvwxyz ";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var out = '';
for (var i = 0; i <= givenString2.length; i++){
    for (var j = 0; j < lower.length; j++){
        if (givenString2[i] === lower[j]){
            out = out + upper[j]
        }
    }
}
console.log(out)


// Given an array of string count the overall total number of characters

var names = ['Akashy', 'Amol', 'Rishi'];
var numberOfCharacters = 0;
for (var i = 0; i < names.length; i++){
    var char = names[i];
    numberOfCharacters = numberOfCharacters + char.length;
}
console.log("Total Number of Characters: " + numberOfCharacters)
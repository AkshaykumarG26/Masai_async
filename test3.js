// var names = ['A','B','C','D','E','F'];
// var marks = [10,20,30,04,50,05];
// for (var i = 0; i < names.length; i++){
//     for (var j = 0; j < marks.length; j++){
//         console.log(names[i] + " - " + marks[j])
//     }
// }

// find max number in given string
// var marks = [1,2,3,4,555,4,3,22,,4,5,5,3,3,2]
// var max = marks[0];
// for (var i = 1; i <= marks.length; i++){
//     if (marks[i] < max){
//         max = marks[i]
//     }
// }
// console.log(max)



var char = 'masai';
var charr = char.split("")
// console.log(charr)
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
for (var i = 0; i <= lower.length; i++){
    for (var j = 0; j < charr.length; j++){
    if (lower[i] == charr[j]){
        console.log(upper[i]);
    }
        // break;
    }
}

var nums = [1,2,3,4,3,2,2,32,3,3,20,21];
var sum = 0;
var count = 0;
var evens = [];
for (var i = 0; i <= nums.length; i++){
    if (nums[i] % 2 == 0){
        sum = sum + nums[i];
        count++
        evens.push(nums[i])
    }
}
// console.log("Average - ",sum/count)
// console.log(evens)
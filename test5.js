var data = {
    name: "Akshay",
    section: "A",
    garde: "X",
    marks: {
        math: 40,
        english: 50,
        hindi: 70
    }
}
// console.log(data.name)

var user1 = {name: 'Akshay', age: 24};
var user2 = {name: "Amol", age: 25};
var user3 = {name: 'Rishi', age: 23};

var users = [
    {name: 'Akshay', age: 24},
    {name: "Amol", age: 25},
    {name: 'Rishi', age: 23}
]
// console.log(users[2].name)
for (var i = 0; i < users.length; i++){

}


var arr = [1,2,3,4,5];
for (var i = 0; i < arr.length; i++){
    for (var j = i+1; j <= arr.length; j++){
        // var emptystr = "";
        var emptyarr = [];
        for (var k = i; k < j; k++){
            emptyarr.push(arr[k])
            // emptystr = emptystr + arr[k]
        }
        // console.log(emptyarr)
        var count = 0
        var count1 = 0
        var count2 = 0
        for (var l = 0; l < emptyarr.length; l++){
            // console.log('l= ',emptyarr[l])
            for (m = l; m <= emptyarr.length; m++){
                if (emptyarr[m] % 2 != 0){
                    count++
                    // console.log('m= ',emptyarr[m])
                }else{
                    count1++
                }
            }
            if (count > count1){
                count2++
            }
        }
    }
}
console.log(count2)



console.log("Nmae");
console.log("Year")
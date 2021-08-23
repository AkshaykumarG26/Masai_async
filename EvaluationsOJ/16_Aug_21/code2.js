function cartTotal(N, price, quantity) {
    var out = 0
  for (var i = 0; i < price.length; i++){
      for (var j = 0; j < quantity.length; j++){
          if (i == j){
            // console.log(price[i]*quantity[j])
            out = out + price[i]*quantity[j]
        }
      }
    }
    console.log(out)
}
// cartTotal(3,[100,20,40],[2,1,2])

function strongPassword(N,arr){
    var array = [];
    for (var i = 0; i < arr.length; i++){
        var count = 0
        var a = arr[i];
        var check = "@#*$";
        for (var j = 0; j < a.length; j++){
            for (var l = 0; l < check.length; l++){
                if (a[j] == check[l]){
                    count++
                }
            }
        }
        if (count>0){
            array.push("strong")
        }else{
            array.push("weak")
        }
    }
    console.log(array.join(" "))
}
// strongPassword(4,['test123', 'new@t', 'mon*y', 'nrupul'])

function removeUppercase(N, str) {
    //write code here
    var out = ''
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < lower.length; j++){
            if (str[i] == lower[j])
                out = out + str[i];
        
    }
    
}
console.log(out)
  }
//   removeUppercase(5,'MasAsAi')


function swapOddEvenElements(N,arr){
    //write code here
    var even = [];
    var odd = [];
    for (var i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            even.push(arr[i+1])
        }else if (i % 2 != 0){
            even.push(arr[i-1])
        }
    }
    console.log(even.join(" "))
}

// swapOddEvenElements(6,['A', 'B', 'C', 'D', 'E', 'F'])
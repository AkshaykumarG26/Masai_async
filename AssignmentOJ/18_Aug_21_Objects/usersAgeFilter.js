var usrs = {
    data: [
        {name: "Nrupul", age: 32},
        {name: "Prateek" , age: 30},
        {name: "Aman" , age: 26},
        {name: "Albert" , age: 28},
        {name: "Yogesh" , age: 44},
    ], 
  
   agefilter: function (putAge) {
     for(var i=0; i< this.data.length;i++){
       var arr = this.data[i];
    //    console.log(arr)
       if(arr.age>putAge){
        console.log(arr.name)
       }
     }
   }
  }
  usrs.agefilter(30);




//   Another method

var usrs = {
    data: [],
    agefilter: function(name,age){
      var list = {
           name:name,
           age:age
      }
      this.data.push(list);
    },
  
  
   agefinder: function () {
     var agee = []; 
     for(var i=0; i< this.data.length;i++){
       var arr = this.data[i];
       if(arr.age>30){
        console.log(arr.name)
       }
     }
   }
  }
  usrs.agefilter("Nrupul",32);
  usrs.agefilter("Prateek",30);
  usrs.agefilter("Aman",26);
  usrs.agefilter("Albert",28);
  usrs.agefilter("Yogesh",44);
  usrs.agefilter("Sidharth",22);
  usrs.agefinder();
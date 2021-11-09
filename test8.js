var users = {
    data: [
        {name: "Nrupul", age: 32},
        {name: "Prateek" , age: 30},
        {name: "Aman" , age: 26},
        {name: "Albert" , age: 28},
        {name: "Yogesh" , age: 44},
    ],
    filterAge: function (Age) {
        for (key in this.users){
            if (users.data.age > Age){
                console.log(users.data["age"])
            }
        }
        
    }
}
users.filterAge(30)
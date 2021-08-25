var users = {
    data : [],
    gender : function (name,gender) {
      var list = {
        userName : name,
        userGender : gender
      }
      this.data.push(list)
    },
    count : function (passGender) {
      var count = 0
    for (i = 0; i < this.data.length; i++) {
      var arr = this.data[i]
    //   console.log(arr)
      if (arr.userGender == passGender) {
        count++
      }
    }
    console.log(count)
    }
  }
  
  users.gender("Name1", "M")
  users.gender("Name2", "F")
  users.gender("Name3", "M")
  users.gender("Name4", "F")
//   console.log(users.data)
  users.count("M")
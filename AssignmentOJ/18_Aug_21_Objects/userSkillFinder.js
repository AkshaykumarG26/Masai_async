var details = {
    users : {},
    member : function(name,skill) {
      if (this.users[name] === undefined) 
         this.users[name] = [skill]
    else {
  this.users[name].push(skill)
    }
  },
  fun : function(skill) {
    for (key in this.users) {
        if (this.users[key].includes(skill)) {
          console.log(key)
      }
    }
  }
  }  
  
details.member("Nrupul", "cmd")
details.member("Prateek", "js")
details.member("Aman", "ds")
details.member("Nrupul", "python")
details.member("Albert", "js")
details.member("Albert", "react")
details.member("Aman", "algo")
details.member("Prateek", "html")
details.member("Nrupul", "sql")


details.fun("ds")
//   console.log(details)
  
  
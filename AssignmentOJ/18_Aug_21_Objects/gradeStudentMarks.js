var array = [
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
  ]

for (i = 0; i < array.length; i++) {
  for (j = 0; j < 1; j++) {
    var marks0 =(array[i].students[j].marks)
    var  d =(array[i].students[j+1].marks)
    var sum = 0
    var sum_1 = 0
    for (k=0; k<marks0.length; k++) {
      sum = sum + (marks0[k])
      sum_1 = sum_1 + d[k]
  }
} 

if (sum<sum_1) {
  console.log(array[i].grade+ "-" + array[i].students[j].name + "-"+sum_1)
} else if (sum>sum_1) {
  console.log(array[i].grade+ "-" + array[i].students[j].name + "-"+sum)
}
  
} 
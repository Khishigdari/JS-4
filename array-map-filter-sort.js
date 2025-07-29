//map method:
// array map array iig uuriig ni uurchlihgui
// map neg utga avna, tuhain function bas neg utga avna
// (map method = for loop)
// map method shine array uusgej ugnu,shine array ni huuchin array tei length jil baina
// ymr array ussgehee map iin return eer shiidne

let ages = [10, 203, 43, 30, 50]
ages.map((a)=>{
    console.log(a)
})

let duu = ages.map((a)=>{
    // console.log(a)
    return 10*a
    // return {
    //     value: 10*a
    // }
})
console.log(duu)
let students = [
    {
            name: "boldo",
    age: 3,
    grade: 11,
    gender: "male"
    },
    {
            name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male"
    },
    {
            name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female"
    },
    {
            name: "dulma",
    age: 9,
    grade: 11,
    gender: "female"
    }
]
let newStudents = students.map((student)=>{
    return {
        name: student.name,
        age: student.age,
        grade: student.grade +1
    }
})
console.log(students)
console.log(newStudents)


//filter
// filter uuriig ni uurchcluhgui
// shine array uusgej ugnu
// filter method neg function avna, tuhain function neg utga avna
// ymr array uusgehee map iin return eer shiidne
// return deer buh true baih element iig tsugluulaaad array butsaana
const filtered = ages.filter((age)=>{
    return age % 2==0
})
console.log(ages)
console.log(filtered)

//sort method
// sort method function avna
// avj bga function ni 2 utga orj irne
// return deer + esvel - too butsaana
// sort method ni array iig uuriig ni uurchlunu

console.log("======= SORT =======")
// ages.sort((a,b)=>{
//     return -1
// })
// console.log(ages)
// ages.sort((a,b )=>{
//     return 1
// })
// console.log(ages)


ages.sort((age2, age1)=>{
    return age2 - age1
})
console.log(ages)

console.log(students)
students.sort((student2, student1)=>{
    return student2.age - student1.age
})
console.log("age", students)

students.sort((student2, student1)=>{
    if (student1.gender > student2.gender) {
        return -1
    } else {
        return 1
    }
})
console.log("gender", students)

students.sort((student2, student1)=>{
    if (student1.name > student2.name) {
        return -1
    } else {
        return 1
    }
})
console.log("name", students)




//------------
let studentsInfo = [
  { name: "boldo", age: 20, grade: 20, balance: 1000, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 950, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 950, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 950, gender: "male" },
  { name: "dulam", age: 15, grade: 5, balance: 950, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 15000, gender: "female" },
  { name: "bataa", age: 10, grade: 50, balance: 1250, gender: "male" },
  { name: "suvd", age: 32, grade: 50, balance: 24000, gender: "female" },
];

//Ascending
studentsInfo.sort((student2, student1)=>{
    return student2.balance - student1.balance
})
console.log("Sorted Ascending Balance:", studentsInfo)

//Descending
studentsInfo.sort((student2, student1)=>{
    return student1.balance - student2.balance
})
console.log("Sorted Descending Balance:", studentsInfo)

// nasand hursen suragchiig filterlej oloh function bich
// gender ugunguut tuhain gendereer filterlej uguh function bich
// eg: filterByGender("male") => zuvhun erchuudiig ylgaj ugnu
// nasaar ni sortloh function bich
// neg too ugunguut tuhain toonoos ih balancetai suragchdiig ylgaj uguh function bich
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents("3A") => {name: "boldo", age: 3, grade: 11, gender: "male", classCode: "3A"},
// removeGenders from student array function bich

// nasand hursen suragchiig filterlej oloh function bich
const adultFilteredStudents = studentsInfo.filter((age)=>{
    if (studentsInfo.age >= 18) {
        return studentsInfo
    }
})
console.log("Filtered Adult Students: ", adultFilteredStudents)

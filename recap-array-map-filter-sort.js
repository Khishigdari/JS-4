//------------
let data = [
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
data.sort((student2, student1)=>{
    return student2.balance - student1.balance
})
console.log("Sorted Ascending Balance:", data)

//Descending
data.sort((student2, student1)=>{
    return student1.balance - student2.balance
})
console.log("Sorted Descending Balance:", data)

// bodlogo 1
// nasand hursen suragchiig filterlej oloh function bich
// bodlogo 2
// gender ugunguut tuhain gendereer filterlej uguh function bich
// eg: filterByGender(students, "male") => zuvhun erchuudiig ylgaj ugnu
// bodlogo 3
// nasaar ni sortloh function bich
// bodlogo 4
// neg too ugunguut tuhain toonoos ih balancetai suragchdiig ylgaj uguh function bich
// bodlogo 5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students, "3A") => {name: "boldo", age: 3, grade: 11, gender: "male", classCode: "3A"},
// bodlogo 6
// removeGenders from student array function bich


// bodlogo 1
// nasand hursen suragchiig filterlej oloh function bich
// const adultFilteredStudents = students.filter((student)=>{
//     if (student.age >= 18) {
//         return students
//     }
// })
// console.log("Filtered Adult Students:", adultFilteredStudents)

function findAdultStudents(students) {
    let filtered = students.filter((student)=>{
        return student.age > 18
    })
    return filtered
}
let result= findAdultStudents(data)
console.log("Filtered Adult Students:", result)


// bodlogo 2
// gender ugunguut tuhain gendereer filterlej uguh function bich
function findByGender(students, gender) {
    let filtered = students.filter((student)=>{
        return student.gender ===gender
    }) 
    return filtered
}
let filterByGender = findByGender(data, "female")
console.log("Filtered By Gender:", filterByGender)


// bodlogo 3
// nasaar ni sortloh function bich
function findByAge(students) {
    let filtered = students.sort((student2, student1)=>{
        return student2.age - student1.age
    })
    return filtered
}
let sortByAge = findByAge(data)
console.log("Sort By Age (Ascending):", sortByAge)


// bodlogo 4
// neg too ugunguut tuhain toonoos ih balancetai suragchdiig ylgaj uguh function bich
function findByBalance(students, a) {
    let filtered = students.filter((student)=>{
        return student.balance>a
    })
    return filtered
}
let filteredByBalance = findByBalance(data, 1000)
console.log("Filtered By More Balance than a:", filteredByBalance)




// bodlogo 5 !!!!!!
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students, "3A") => {name: "boldo", age: 3, grade: 11, gender: "male", classCode: "3A"},
function addClassCodeToStudents(students, a) { 
    // let classCode = []
    // let count= 0
    data.classCode = "3A"
}
console.log(data.classCode)
// let addedClassCode =  addClassCodeToStudents(data, "3A")
// console.log("Added Class Code:", addedClassCode)


// bodlogo 6
// removeGenders from student array function bich
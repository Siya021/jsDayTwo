// const subjects= [ "Phython", "C++", "VB.Net", "Javascript", "Assembly"]
// const lastSubject = subjects.pop();
// console.log(lastSubject)

let subjects = [ "Phython", "C++", "VB.Net", "Javascript", "Assembly"]
let middleIndex = Math.floor((0 + subjects.length - 1)/2)
console.log(subjects[middleIndex])

// function
// function findElement(arr, index) {
//     return index < arr.length ? arr
//     [index] : "Index out of range"
// }
// console.log(findElement(subjects,5))
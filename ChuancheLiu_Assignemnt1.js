//Q1
let studentList = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];
//1.Iterate all students in the object
function studentWithHighestMarks(array) {
    array.forEach((student) => {
        //2.Get marks array
        grade = student.marks;
        //3.Use reduce function to calculate the total mark
        let total = grade.reduce((acc, cV) => {
            return acc + cV
        }, 0)
        //4.Use reduce function to get the highest mark
        let highest = grade.reduce((acc, cV) => {
            if(acc > cV){
                cV = acc
            }
            return cV
        }, -Infinity)
        //5.Return student name and the highest mark.
        console.log(`${student.name} Mark total:${total} Highest mark:${highest}`)
        });
        
    }

console.log(studentWithHighestMarks(studentList));

//Q2
numArray = [20, -2, 4, -11, 0, 25]
function minimumValue(array){
    let highest = array.reduce((acc, cV) => {
        if(acc < cV){
            cV = acc
        }
        return cV
    }, +Infinity)
    return console.log(highest)
}

minimumValue(numArray);

//Q3
function lengthOfString(word) {
    wordList = [...word]
    return wordList.length;
}

console.log(lengthOfString("Chuanche"))


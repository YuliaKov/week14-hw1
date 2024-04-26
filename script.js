let grades = new Array(12).fill().map(() => Math.ceil(Math.random()*100));
console.log(grades)


function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

let average = Math.round(sumArray(grades)/grades.length);
console.log(average)


function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
  }
console.log(getMaxOfArray(grades));


function getMinOfArray(arr) {
    return Math.min.apply(null, arr);
  }
console.log(getMinOfArray(grades));


const positiveGrades = grades.filter(el=>el>=60);
console.log(positiveGrades.length);


const negativeGrades = grades.filter(el=>el<60);
console.log(negativeGrades.length);


function convertGrade(grade) {
    if (grade >= 80) {
        return "A";
    } else if (grade >= 60) {
        return "B";
    } else if (grade >= 40) {
        return "C";
    } else if (grade >= 20) {
        return "D";
    } else {
        return "E";
    }
}

let letterGrades = grades.map(convertGrade);
console.log(letterGrades);


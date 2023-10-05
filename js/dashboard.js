function getGrade(){
    let grade = prompt("Please, enter your grade:");
    document.getElementById('grade').innerHTML = grade;
    if (grade < 5.5) {
        document.getElementById('grade').className = 'failingGrade';
    }
    else if (grade <10 ) {
        document.getElementById('grade').className = 'passingGrade';
    } else {
        document.getElementById('grade').className = 'nullGrade';
    }
}

function getExam(){
    let grade = prompt("Please, enter your grade:");
    document.getElementById('exam').innerHTML = grade;
    if (grade < 5.5) {
        document.getElementById('exam').className = 'failingGrade';
    }
    else if (grade <10 ) {
        document.getElementById('exam').className = 'passingGrade';
    } else {
        document.getElementById('exam').className = 'nullGrade';
    }
}

function getgrade(){
    let grade = prompt("Please, enter your grade:");
    document.getElementById('grade2').innerHTML = grade;
    if (grade < 5.5) {
        document.getElementById('grade2').className = 'failingGrade';
    }
    else if (grade <10 ) {
        document.getElementById('grade2').className = 'passingGrade';
    } else {
        document.getElementById('grade2').className = 'nullGrade';
    }
}
function getGrade(){
    let grade = prompt("Please, enter your grade:");
    document.getElementById('grade').innerHTML = grade;

    if (grade <= 5.5) {
        document.getElementById('grade').grade.style.color = 'red';
    }
    else {
        document.getElementById('grade').grade.style.color = 'green';
    }
}
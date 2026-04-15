// const student_list = [
//     ...
// ];

const student_table = document.getElementById('patient-table');

let fail = [];
let pass = [];

function classifyStudents(student_list){
    for(let i in student_list){
        let grade = student_list[i].grade;
        if(grade >= 50){
            pass.push(student_list[i]);
        }else{
            fail.push(student_list[i]); 
        }
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        td_name.textContent = `${student_list[i].name}`;
        let td_grade = document.createElement('td');
        td_grade.textContent = `${student_list[i].grade}`;
        tr.appendChild(td_name);
        tr.appendChild(td_grade);
        student_table.appendChild(tr);
    }
}

classifyStudents(student_list);

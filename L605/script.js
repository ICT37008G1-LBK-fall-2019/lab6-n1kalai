

var students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
];


let div = document.querySelector('#student-list');
function displayStudentsTable(studentList){
    //write code
    let table = document.createElement('table');
    let tablehead = document.createElement('th');
    for (let x of studentList){
    // tablehead.innerHTML = x[0].FirstName;
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${x.FirstName}</td> 
                    <td>${x.LastName}</td> 
                    <td>${x.PersonalNumber}</td>`;
    table.appendChild(tr);

    }
    div.appendChild(table)
}


displayStudentsTable(students);
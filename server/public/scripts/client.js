console.log('Hello World');

let contentDiv = document.querySelector('#employeeTable')

function getEmployees() {
    fetch('/employees')
    .then((response) => {
        return response.json();
    })
    .then((employees) => {
        employeeInfo.innerHTML = employees
        .map((employee) => {
            return `
            <tr>
                <th>${firstName.firstName}</th>
                <th>${lastName.lastName}</th>
                <th>${id.id}</th>
                <th>${title.title}</th>   
                <th>${annualSalary.annualSalary}</th>
            </tr>
            `;
        })
        .join('');
    });
};
getEmployees();


function salarySubmit(event) {
    event.preventDefault();
    console.log(event);

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNumber = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    console.log('Inputs:', firstName, lastName, idNumber, jobTitle, annualSalary);

    let employeeToAdd = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualSalary: annualSalary
    });

    fetch('/employees', {
        method: 'POST',
        body: employeeToAdd,
        headers: { 'Content-Type': 'application/json'}})
    .then((response) =>  {
        console.log('POST response', response);

        document.querySelector('#first-name').value = '';
        document.querySelector('#last-name').value = '';
        document.querySelector('#id-number').value = '';
        document.querySelector('#fjob-title').value = '';
        document.querySelector('#annual-salary').value = '';

        getEmployees();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong');
        })
};

function deleteEntry(event) {
    event.target.parentElement.parentElement.remove();
};

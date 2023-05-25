console.log('Hello World');

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

};

function deleteEntry(event) {
    event.target.parentElement.parentElement.remove();
};

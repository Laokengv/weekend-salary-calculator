console.log('Hello World');


function getEmployees() {
  console.log('in getEmployees');
  // function to get employees from server
  fetch('/employees')
    .then((response) => {
      console.log('Response received', response);
      return response.json();
    })
    .then((employees) => {
      let table = document.getElementById('#employeeTable')
      let contentDiv = document.querySelector('#employeeTable')
      console.log(employees)

      contentDiv.innerHTML = '';
      for (let employee of employees) {
        contentDiv.innerHTML += `
           <tr>
              <th>${employee.firstName}</th>
              <th>${employee.lastName}</th>
              <th>${employee.idNumber}</th>
              <th>${employee.jobTitle}</th>   
              <th>${employee.annualSalary}</th>
              <th><button onclick="deleteEntry(event)">Delete</th>
           </tr>
        `;
      }
    }).catch((error) => {
      console.log('Error with request:', error);
      alert('Something went wrong');
    })
};
getEmployees();


function salarySubmit(event) {
  // function to post 
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
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      console.log('POST response', response);

      document.querySelector('#first-name').value = '';
      document.querySelector('#last-name').value = '';
      document.querySelector('#id-number').value = '';
      document.querySelector('#job-title').value = '';
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

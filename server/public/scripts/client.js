console.log('Hello World');

let salaryArray = [];

let totalSalary = 0;

const salary = document.querySelector('#monthlyTotal');

// function getEmployees() {
//   console.log('in getEmployees');
//   // function to get employees from server
//   fetch('/employees')
//     .then((response) => {
//       console.log('Response received', response);
//       return response.json();
//     })
//     .then((employees) => {
//       let table = document.getElementById('#employeeTable')
//       let contentDiv = document.querySelector('#employeeTable')
//       console.log(employees)

//       contentDiv.innerHTML = '';
//       for (let employee of employees) {
//         contentDiv.innerHTML += `
//            <tr>
//               <th>${employee.firstName}</th>
//               <th>${employee.lastName}</th>
//               <th>${employee.idNumber}</th>
//               <th>${employee.jobTitle}</th>   
//               <th>${employee.annualSalary}</th>
//               <th><button onclick="deleteEntry(event)">Delete</th>
//            </tr>
//         `;
//       }
//     }).catch((error) => {
//       console.log('Error with request:', error);
//       alert('Something went wrong');
//     })
// };
// getEmployees();


function salarySubmit(event) {
  // function to post 
  event.preventDefault();
  // console.log(event);

  let firstName = document.querySelector('#first-name').value;
  let lastName = document.querySelector('#last-name').value;
  let idNumber = document.querySelector('#id-number').value;
  let jobTitle = document.querySelector('#job-title').value;
  let annualSalary = Number(document.querySelector('#annual-salary').value); // the Number() function changes this from 
  // a string to a point number
  // https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
  let salaryTable = document.querySelector('#total');
  salaryTable.innerHTML += `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${idNumber}</td>
      <td>${jobTitle}</td>
      <td>${annualSalary}</td>
      <td><button onclick="deleteEntry(event)">Delete</td>
    </tr>
  `;
  salaryArray.push(annualSalary);
  totalSalary += annualSalary;
  salary.innerText = totalSalary;

  let changeSalaryColor = document.querySelector('.monthlyTotalSal');
  if(totalSalary > 20000) {
    changeSalaryColor.style.backgroundColor = 'red';
  }

  // let employeeToAdd = JSON.stringify({
  //   firstName: firstName,
  //   lastName: lastName,
  //   idNumber: idNumber,
  //   jobTitle: jobTitle,
  //   annualSalary: annualSalary
  // });

  // fetch('/employees', {
  //   method: 'POST',
  //   body: employeeToAdd,
  //   headers: { 'Content-Type': 'application/json' }
  // })
  //   .then((response) => {
  //     console.log('POST response', response);

  //     document.querySelector('#first-name').value = '';
  //     document.querySelector('#last-name').value = '';
  //     document.querySelector('#id-number').value = '';
  //     document.querySelector('#job-title').value = '';
  //     document.querySelector('#annual-salary').value = '';

  //     getEmployees();
  //   }).catch((error) => {
  //     console.log(error);
  //     alert('Something went wrong');
  //   })
};

function deleteEntry(event) {
  event.target.parentElement.parentElement.remove();
};

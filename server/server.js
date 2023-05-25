const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.static('server/public'));
app.use(express.json());

const employeeList = [
    {
        firstName: 'Eugene',
        lastName: 'Krabs',
        idNumber:  7972,
        jobTitle: 'Manager',
        annualSalary: 60000
    },
    {
        firstName: 'Spongebob',
        lastName: 'Squarepants',
        idNumber:  7877,
        jobTitle: 'Cook',
        annualSalary: 25000
    },
    {
        firstName: 'Squidward',
        lastName: 'Tentacles',
        idNumber:  7940,
        jobTitle: 'Cashier',
        annualSalary: 20000
    }
];
                    

app.get('/employees', (req, res) => {
    res.send(employeeList);
});

app.post('/employees', (req, res) => {
    employeeList.push(req.body);
    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log('Server running on:', PORT);
});

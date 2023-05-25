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
        salary: '$60,000'
    },
    {
        firstName: 'Spongebob',
        lastName: 'Squarepants',
        idNumber:  7877,
        jobTitle: 'Cook',
        salary: '$25,000'
    },
    {
        firstName: 'Squidward',
        lastName: 'Tentacles',
        idNumber:  7940,
        jobTitle: 'Cashier',
        salary: '$20,000'
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

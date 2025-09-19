var http = require('http');

//TODO - Use Employee Module here
var employee = require('./Employee.js'); // import employee module

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {

    // FIXED ERROR: Module type not specified
    res.setHeader("Content-Type", "application/json");

    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            //set content type to text/html, then display header message
            res.setHeader("Content-Type", "text/html");
            res.end(`<h1>Welcome to Lab Exercise 03</h1>
                <ul>
                    <li><a href = "/employee">/employee</li>
                    <li><a href = "/employee/names">/employee/names</li>
                    <li><a href = "/employee/totalsalary">/employee/totalsalary</li>
                </ul>
            `
            )
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.setHeader("Content-Type", "text/html");
            res.end(JSON.stringify(employee));

        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const names = employee
                .map(employee => employee.firstName + ' ' + employee.lastName)
                .sort();
            res.setHeader("Content-Type", "text/html");
            res.end(JSON.stringify(names));

        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            //reduce array everytime the current employee salary gets added
            const totalSalary = employee.reduce((total, emp) => total + emp.Salary, 0);

            res.setHeader("Content-Type", "text/html");
            res.end(JSON.stringify( {"total_salary" : totalSalary} ));

        }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
const { prompt } = require('inquirer');
const q = require('./question.js');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');


const runApp = async () => {
    try {

        let { employee } = await prompt(q.chooseEmployee);
        let newEmployee = await getEmployee(employee);
        var EmployeeArray = [];
        EmployeeArray.push(newEmployee);
        checkIfthereotherEmployee();

        console.log(EmployeeArray);


    } catch (error) {
        console.log(error)
    }
}
const getEmployee = async emp => {
    try {

        if (emp === "Manager") {
            let answer = await prompt(q.managerQuestion);
            return new Manager(answer.id, answer.name, answer.email, answer.officeNumber);
        }
        if (emp === "Engineer") {
            let answer = await prompt(q.engineerQuestion);
            return new Engineer(answer.id, answer.name, answer.email, answer.github);
        }
        if (emp === "Intern") {
            let answer = await prompt(q.internQuestion);
            return new Intern(answer.id, answer.name, answer.email, answer.school);
        }

    } catch (error) {
        console.log(error)
    }
}

runApp();
const  checkIfthereotherEmployee = async () => {
    try {
        let answer = await prompt(q.checkIfOtherEmployee);
        console.log(answer.otherEmployee)
        if (answer.otherEmployee === "yes") {
            runApp();

        }
        else {
            console.log("working")
        }



    } catch{
    }


}



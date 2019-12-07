module.exports = {
    chooseEmployee: {
        name: "employee",
        type: "list",
        message: "Wich type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    managerQuestion: [
        {
            name: 'name',
            message: 'what is your name?',
            type: 'input',
            
        },
        {
            name: 'id',
            message: 'What is your manager ID?',
            type: 'input'
        },
        {
            name: 'email',
            message: 'What is your Email?',
            type: 'input'
        },
        {
            name: 'officeNumber',
            message: 'What is your office number?',
            type: 'input'
        },
    ],
    engineerQuestion: [
        {
            name: 'name',
            message: 'what is your name?',
            type: 'input',
            
        },
        {
            name: 'id',
            message: 'What is your ID?',
            type: 'input'
        },
        {
            name: 'email',
            message: 'What is your Email?',
            type: 'input'
        },
        {
            name: 'github',
            message: 'What is your GitHub account?',
            type: 'input'
        },
    ],
    internQuestion: [
        {
            name: 'name',
            message: 'what is your name?',
            type: 'input',
            
        },
        {
            name: 'id',
            message: 'What is your ID?',
            type: 'input'
        },
        {
            name: 'email',
            message: 'What is your Email?',
            type: 'input'
        },
        {
            name: 'school',
            message: 'Where do you go to school?',
            type: 'input'
        },

    ],
    checkIfOtherEmployee: [
        {
            name: "otherEmployee",
            type: "list",
            message: "is ther other employee you would like to add?",
            choices: ['yes' ,'no']
        },   
    ]
    }
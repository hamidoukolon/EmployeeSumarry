const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email,school ){
        super(id, name, email);
        this.school = school;
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;
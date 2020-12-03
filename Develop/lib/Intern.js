// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

function Intern(name, id, email, school) {
  this.school = school;
  this.getSchool = () => {
    return school;
  };
  this.getRole = () => {
    return "Intern";
  };
}

// const e = new Intern("Thomas", 01, "dawson@code.com", "DU");
// console.log(e);

// const e = new Intern("Thomas", 01, "dawson@code.com", "DU");
// console.log(e);

module.exports = Intern;

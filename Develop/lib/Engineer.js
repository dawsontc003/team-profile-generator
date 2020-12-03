// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

// Create Engineer object from constructor function
function Engineer(name, id, email, github) {
  this.github = github;
  this.getGithub = () => {
    return github;
  };
  this.getRole = () => {
    return "Engineer";
  };
}

// const e = new Employee("Thomas", 01, "dawson@code.com");
// console.log(e);

// const e = new Engineer("Thomas", 01, "dawson@code.com", "dawsontc003");
// console.log(e);

module.exports = Engineer;

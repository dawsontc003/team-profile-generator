// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

// Create Engineer object from constructor function
function Engineer(github) {
  this.github = github;
  this.getgithub = () => {
    return github;
  };
  this.getRole = () => {
    return "Engineer";
  };
}

module.exports = Engineer;

// Import Employee JS file functionality
const Employee = require("../lib/Employee");

// Engineer constructor function class extending employee object details
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // method to get github value from object
  getGithub() {
    return this.github;
  }
  // method to get role value from object
  getRole() {
    return "Engineer";
  }
}
// exporting functionality to external js files
module.exports = Engineer;

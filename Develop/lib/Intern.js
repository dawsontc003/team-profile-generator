// Import Employee JS file functionality
const Employee = require("../lib/Employee");

// Intern constructor function class extending employee object details
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // method to get school value from object
  getSchool() {
    return this.school;
  }
  // method to get role value from object
  getRole() {
    return "Intern";
  }
}
// exporting functionality to external js files
module.exports = Intern;

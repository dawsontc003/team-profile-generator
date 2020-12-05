// Import Employee JS file functionality
const Employee = require("../lib/Employee");

// Manager constructor function class extending employee object details
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // method to get office number value from object
  getOfficeNumber() {
    return this.officeNumber;
  }
  // method to get role value from object
  getRole() {
    return "Manager";
  }
}
// exporting functionality to external js files
module.exports = Manager;

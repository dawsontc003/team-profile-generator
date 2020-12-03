// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

function Manager(name, id, email, officeNumber) {
  this.officeNumber = officeNumber;
  this.getOfficeNumber = () => {
    return officeNumber;
  };
  this.getRole = () => {
    return "Manager";
  };
}

module.exports = Manager;

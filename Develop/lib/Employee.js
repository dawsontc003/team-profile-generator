// Constructor function class template for creating employee objects
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // method to get name value from object
  getName() {
    return this.name;
  }
  // method to get ID value from object
  getId() {
    return this.id;
  }
  // method to get email value from object
  getEmail() {
    return this.email;
  }
  // method to get role value from object
  getRole() {
    return "Employee";
  }
}
// exporting functionality to external js files
module.exports = Employee;

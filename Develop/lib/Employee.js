// TODO: Write code to define and export the Employee class
// TODO: Write code to define and export the Employee class

// Constructor function for creating employee object
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  // Arrow function to retrieve name key in object
  this.getName = () => {
    return name;
  };
  // Arrow function to retrieve Id key in object
  this.getId = () => {
    return id;
  };
  // Arrow function to retrieve email key in object
  this.getEmail = () => {
    return email;
  };
  this.getRole = () => {
    return "Employee";
  };
}

//const e = new Employee("Thomas", 01, "dawson@code.com");

module.exports = Employee;

// TODO: Write code to define and export the Employee class
// TODO: Write code to define and export the Employee class

// Create employee object from constructor function
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.getName = () => {
    return name;
  };
  this.getId = () => {
    return id;
  };
  this.getEmail = () => {
    return email;
  };
}
// Validation of constructor function creating an object
//const e = new Employee("Thomas", 01, "dawson@code.com");
//console.log(e);

//console.log(e.getName());

module.exports = Employee;

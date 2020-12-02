// TODO: Write code to define and export the Employee class
// TODO: Write code to define and export the Employee class

// Create employee object from constructor function
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
}
// Validation of constructor function creating an object
// const e = new Employee("Thomas", 01, "dawson@code.com");
// console.log(e);

// setting getName() function
// function getName() {
//   console.log(this.name);
// }

module.exports = Employee;

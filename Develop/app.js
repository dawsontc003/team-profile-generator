// required functionality from external files
const render = require("./lib/htmlRenderer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeeArray = [];
// Inquirer prompt user question via CLI
inquirer
  .prompt([
    // question for Manager name
    {
      type: "input",
      message: "Managers Name?",
      name: "Name",
    },
    // question for Manager employee ID
    {
      type: "input",
      message: "Employee ID?",
      name: "ID",
    },
    // question for Manager Email address
    {
      type: "input",
      message: "Email Address?",
      name: "Email",
    },
    // question for Manager office number
    {
      type: "input",
      message: "Office Phone Number?",
      name: "OfficeNumber",
    },
  ])
  .then((response) => {
    // Constructor function all with manager argument details
    const manager = new Manager(
      response.Name,
      response.ID,
      response.Email,
      response.OfficeNumber
    );
    // pushing manager object to employee array
    employeeArray.push(manager);
    // function call to verify additional employees
    moreEmployees();
  });
// Function for gathering Intern details
function intern() {
  inquirer
    .prompt([
      // question for Intern name
      {
        type: "input",
        message: "Interns Name?",
        name: "InternName",
      },
      // question for Intern employee ID
      {
        type: "input",
        message: "Employee ID?",
        name: "ID",
      },
      // question for Intern email address
      {
        type: "input",
        message: "Email Address?",
        name: "Email",
      },
      // question for Intern school
      {
        type: "input",
        message: "School of Internship?",
        name: "School",
      },
    ])
    .then((response) => {
      // Constructor function all with intern argument details
      const intern = new Intern(
        response.InternName,
        response.ID,
        response.Email,
        response.School
      );
      // pushing intern object to employee array
      employeeArray.push(intern);
      // function call to verify additional employees
      moreEmployees();
    });
}
// Function for gathering Engineer details
function engineer() {
  inquirer
    .prompt([
      // question for Engineer name
      {
        type: "input",
        message: "Engineer's Name?",
        name: "EngineerName",
      },
      // question for Engineer employee ID
      {
        type: "input",
        message: "Employee ID?",
        name: "ID",
      },
      // question for Engineer email address
      {
        type: "input",
        message: "Email Address?",
        name: "Email",
      },
      // question for Engineer school
      {
        type: "input",
        message: "Engineer's Github username?",
        name: "Github",
      },
    ])
    .then((response) => {
      // Constructor function all with engineer argument details
      const engineer = new Engineer(
        response.EngineerName,
        response.ID,
        response.Email,
        response.Github
      );
      // pushing engineer object to employee array
      employeeArray.push(engineer);
      // function call to verify additional employees
      moreEmployees();
    });
}
// function for more employees question
function moreEmployees() {
  inquirer
    .prompt([
      // question for adding employees
      {
        type: "list",
        message: "Add additional team members?",
        name: "employee",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((response) => {
      //If else conditions for employee type specific questions
      if (response.employee === "Intern") {
        intern();
      } else if (response.employee === "Engineer") {
        engineer();
      } else {
        // call function to push employee info to HTML templates
        render(employeeArray);
        // call function to write HTML file
        generateHTML();
      }
    });
}

// function to generate HTML file in defined directory
function generateHTML() {
  fs.writeFile(
    "output/team.html",
    render(employeeArray),
    // error handling and success message to advise commandline user of error or succes
    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}

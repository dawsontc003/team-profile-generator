const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
inquirer
  .prompt([
    // question for project title
    {
      type: "input",
      message: "Managers Name?",
      name: "Name",
    },
    // question for description details
    {
      type: "input",
      message: "Employee ID?",
      name: "ID",
    },
    // question for installation details
    {
      type: "input",
      message: "Email Address?",
      name: "Email",
    },
    // question for how to use application
    {
      type: "input",
      message: "Office Phone Number?",
      name: "OfficeNumber",
    },
    // question for license details
    {
      type: "list",
      message: "Add addtional team members?",
      name: "employee",
      choices: ["Engineer", "Intern", "None"],
    },
    // chaining on dot then response to capture user input from command line terminal
  ])
  .then((response) =>
    // invoking write file method with file type ".md" with details to inject user input from the command line in the desired sectoins of the .md file
    {
      if (response.employee === "Intern") {
        intern();
        // console.log("ask intern questions");
      } else if (response.employee === "Engineer") {
        console.log("ask engineer questions");
      } else {
        console.log("stop question");
      }
    }
  );
// Function for gathering Intern details
function intern() {
  inquirer
    .prompt([
      // question for project title
      {
        type: "input",
        message: "Interns Name?",
        name: "InternName",
      },
      // question for description details
      {
        type: "input",
        message: "Employee ID?",
        name: "ID",
      },
      // question for installation details
      {
        type: "input",
        message: "Email Address?",
        name: "Email",
      },
      // question for how to use application
      {
        type: "input",
        message: "School of Internship?",
        name: "School",
      },
      // question for license details
      {
        type: "list",
        message: "Add addtional team members?",
        name: "employee",
        choices: ["Engineer", "Intern", "None"],
      },
      // chaining on dot then response to capture user input from command line terminal
    ])
    .then((response) =>
      // invoking write file method with file type ".md" with details to inject user input from the command line in the desired sectoins of the .md file
      {
        if (response.employee === "Intern") {
          intern();
        } else if (response.employee === "Engineer") {
          console.log("ask engineer questions");
        } else {
          console.log("stop question");
        }
      }
    );
}

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

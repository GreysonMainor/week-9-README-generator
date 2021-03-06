// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
//const writeFileAsync = util.promisify(fs.writeFile)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Add a description for your project.",
        name: "description"
    },
    {
        type: "checkbox",
        message: "What kind of license should your project have?",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU GPL v3.0",
            "None"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does your user need to know to about using the repo?",
        name: "using"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this repo?",
        name: "contribute"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data, function(err) {
        if (err){
            return console.log(err);
        } else
       return console.log ("SUCCESS")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("DEMO-README.md", generateMarkdown(data));
    })
 }

// Function call to initialize app
init();

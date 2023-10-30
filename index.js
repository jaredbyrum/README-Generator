// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown')
// TODO: Create an array of questions for user input

const licenses = ["None", "MIT", "BSD", "GPL", "Apache"]

const questions = [
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please briefly describe your application.',
    name: 'description',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Please explain how to install your app?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please explain the usage of your app?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please explain how someone else could contribute to this project if desired.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Does your app involve any testing?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license would you like to use?',
    choices: licenses
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  }
]
  
 
  
// TODO: Create a function to write README file
function writeToFile(data) {
  const filename = "./Develop/generated/README.md";

  fs.writeFile(filename, data, function(err) {
    err ? console.log(err) : console.log("Created " + filename + "!");
  });    
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();

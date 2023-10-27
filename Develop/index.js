// Import necessary modules
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Define an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license: ',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address: ',
    },
];

// Function to write data to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} generated successfully.`);
        }
    });
}

// Main function to initialize the application
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Start the application by calling the init function
init();

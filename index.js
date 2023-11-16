// TODO: Include packages needed for this application
// TODO: Create a function to initialize app
// TODO: Create a function to write README file
// TODO: Create an array of questions for user input
// Function call to initialize app
const fs = require('fs');
const inquirer = require('inquirer');

async function promptUser() {
    const responses = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your app name?',
        },
        {
            type: 'input',
            name: 'description', 
            message: 'Enter description:',
        },
        {
            type: 'input',
            name: 'Table of Contents', 
            message: 'List table of contents:',
        },
        {
            type: 'input',
            name: 'installation', 
            message: 'Enter Installation Instructions:',
        },
        {
            type: 'input',
            name: 'usage', 
            message: 'Enter Usage:',
        },
        {
            type: 'input',
            name: 'Contributing', 
            message: 'Enter Contributors:',
        },
        {
            type: 'input',
            name: 'tests', 
            message: 'Enter Tests:',
        },
        {
            type: 'input',
            name: 'questions', 
            message: 'Enter Questions:',
        }
    ]);

    return responses;
}




function generateReadMe (data) {
     return `
##${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}


## Contributing
${data.contributing}

## License
${data.license}

## Tests
${data.tests}

## Questions
${data.questions}

`;

}


function writeToFile(fileName, readmeContent) {
    fs.writeFile(fileName, readmeContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

function init() {}

init();

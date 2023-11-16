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
            type: 'list',
            name: 'license',
            message: 'Pick a License',
            choices: [
                { title: 'MIT License', value: 'MIT' },
                { title: 'GNU AGPLv3', value: 'AGPLv3' },
                { title: 'GNU GPLv3', value: 'GPLv3' },
                { title: 'GNU LGPLv3', value: 'LGPLv3' },
                { title: 'Mozilla Public License 2.0', value: 'MPL2.0' },
                { title: 'Apache License 2.0', value: 'Apache2.0' },
                { title: 'Boost Software License 1.0', value: 'BSL1.0' },
                { title: 'The Unlicense', value: 'Unlicense' },
              ],
            initial: 1
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
## ${data.name}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}


## Contributing
${data.Contributing}

## License
${data.license}

## Tests
${data.tests}

## Questions
${data.questions}

`;

}


async function init() {
    try {
        const data = await promptUser();
        const readMe = generateReadMe(data);
        fs.writeFileSync('README.md', readMe);
        console.log('Successfully wrote to README.md');
    } catch (error) {
        console.log(error);
    }
}

init();

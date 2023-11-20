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
            message: 'Enter Github Username:',
        },
        {
            type: 'input',
            name: 'email', 
            message: 'Enter Email:',
        }
    ]);

    return responses;
}




function generateReadMe (data) {
     return `
## ${data.name}
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}


## Contributing
${data.Contributing}

## License
This application is covered by the ${data.license} license.

## Tests
${data.tests}

## Questions?
Feel free to reach out with any questions!

Github: ${data.questions}

Email: ${data.email}

`;

}


async function init() {
    try {
        const data = await promptUser();
        const readMe = generateReadMe(data);
        fs.writeFileSync('README.md', readMe);
        console.log('Successfully generated README.md!');
    } catch (error) {
        console.log(error);
    }
}
 
init();

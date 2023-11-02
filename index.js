// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions =
inq
    .prompt([
        {
            type: 'input',
            message: 'Please enter the title of your readme',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description of the stuff you want to',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please enter any installation instructions',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please enter the usage information',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please enter any contribution guidelines',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'Please enter testing instructions',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'Please select a license',
            choices: [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'email'
        }
    ])
    .then((data) => {
        console.log(data)
        fs.promises.writeFile("answers.json", JSON.stringify(data))
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

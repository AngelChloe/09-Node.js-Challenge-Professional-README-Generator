// packages needed for this application
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [{
        // project title
        type: 'input', 
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue.')
                return false;
            }
        }
    },
    {
        // project description
        type: 'input',
        message: 'Provide a brief description of your project.',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description to continue.')
                return false;
            }
        }
    },
    {
        // project installation information
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation information to continue.')
                return false;
            }
        }
    },
    {
        // explain how to use this project
        type: 'input',
        message: 'Provide a brief explanation on how to use this project.',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter a useage explanation to continue.')
                return false;
            }
        }
    },
    {
        // choose section titles listed on the table of contents
        type: 'rawlist',
        message: 'What license would you like to use for this project?',
        name: 'license',
        choices: ['ISC', 'Apache', 'MPL', 'CC', 'NONE'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license continue.');
                return false;
            }
        }
    },
    {
        // how to contribute to this project
        type: 'input',
        message: 'How will coders contribute to this project?',
        name: 'contribution',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter how to contribute to continue.')
                return false;
            }
        }
    },
    {
        // how do coders test this project
        type: 'input',
        message: 'How do coders test this project?',
        name: 'test',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter how to test to continue.')
                return false;
            }
        }
    },
    {
        // github user information to this project
        type: 'input',
        message: 'Enter your github username.',
        name: 'github',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a github username to continue.')
                return false;
            }
        }
    },
    {
        // how to contribute to this project
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address to continue.')
                return false;
            }
        }
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateMarkdown(answers)
});


// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize app
function init() {

}

// call to initialize app
init();

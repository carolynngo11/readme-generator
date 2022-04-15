const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: "What is the project name?",
    },
    {
        type: 'input',
        name: 'Description',
        message: "What is your project about?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "What are the steps required to install your project?",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "Provide example and/or screenshot.",
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "List your collaborators (if any).",
    },
    {
        type: 'input',
        name: 'Tests',
        message: "Write tests for your application.",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: "Enter your GitHub username.",
    },
    {
        type: 'list',
        name: 'License',
        message: "Choose license.",
        choices: ['MIT', 'Apache', 'GPL']
    },

  ])
  .then((response) => {
    console.log(response)
    fs.writeFile('README.md', generateReadMe(response), function(err){
        if (err) {
            console.log(err);
        }else{
            console.log('Successfully added README file!');
        }
    })
  })

  function generateReadMe({Title, License, Description, Installation, Usage, Contributing, Tests, GitHub}){
      return `# ${Title}

![](https://img.shields.io/badge/License-${License}-success)

## Description
${Description}

## Table of Contents
      
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
      
## Installation
${Installation}

## Usage
${Usage}

## Contributing
${Contributing}

## Tests
${Tests}

## Questions
Have any Questions? Contact me: https://github.com/${GitHub}
`
}
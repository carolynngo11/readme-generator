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
        message: "___?",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "___?",
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "___?",
    },
    {
        type: 'input',
        name: 'Tests',
        message: "___?",
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
        choices: ['a', 'b', 'c', 'd']
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

${License}

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
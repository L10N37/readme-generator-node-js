/*
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
Description, [x] 
Table of Contents, [x]
Installation, [x]
Usage, [x]
License, [x] 
Contributing, [x] 
Tests, [x] 
and Questions [x]

WHEN I enter my project title
THEN this is displayed as the title of the README [x]

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests [x]

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

*/

// The main code here was initially created by ChatGPT! This was modified to suit the project requirements.

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateReadme = (data) => {
  return `
# ${data.title}
<br>
${data.description}
<br>

## Table Of Contents
<br>
${data.TOC}
<br>

## Installation
<br>
${data.installation}
<br>

## Usage
<br>
${data.usage}
<br>

## License
<br>
${data.license}
<br>

## Contributing
<br>
${data.contributing}
<br>

## Tests
<br>
${data.tests}
<br>

## Questions
<br>
${data.questions}
<br>

`;
};

rl.question("Enter title: ", (title) => {
    rl.question("Enter table of contents: ", (TOC) => {
        rl.question("Enter description: ", (description) => {
            rl.question("Enter installation instructions: ", (installation) => {
                rl.question("Enter usage information: ", (usage) => {
                    rl.question("Enter license: ", (license) => {
                        rl.question("Enter contribution guidelines: ", (contributing) => {
                            rl.question("Enter test instructions: ", (tests) => {
                                rl.question("Enter questions: ", (questions) => {
          const data = { title, TOC, description, installation, usage, license, contributing, tests, questions };
          const readme = generateReadme(data);
          fs.writeFile("README.md", readme, (err) => {
            if (err) throw err;
            console.log("README.md generated!");
            rl.close();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
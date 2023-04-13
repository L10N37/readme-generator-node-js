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
THEN a badge for that license is added near the top of the README [X]
and a notice is added to the section of the README entitled License that explains which license the application is covered under [x]

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile [x]

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions [x]

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README [x]

*/



//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#file-license-badges-md
const licenseBadges = {
    question: "Which license do you want to use for your github project?",
    options: ['Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'Creative Commons Zero', 'Creative Commons Attribution 4.0 International',
    'Creative Commons Attribution-ShareAlike 4.0 International', 'Creative Commons 4 Attribution-NonCommercial 4.0 International', 'Creative Commons Attribution-NoDerivates 4.0 International',
    'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public 1.0' , 'GNU GPL v3',
    'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic  2.1', 'The Hippocratic  3.0', 'IBM Public  Version 1.0', 'ISC  (ISC)', 
    'The MIT', 'Mozilla Public 2.0', 'Attribution  (BY)', 'Open Database  (ODbL)', 'Public Domain Dedication and  (PDDL)', 'The Perl ', 
    'The Artistic 2.0', 'SIL Open Font  1.1', 'The Unlicense', 'The Do What the Fuck You Want to Public', 'The zlib/libpng'],
    badgeLinks: // These are in order of the options above (index of arrays match)
    ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)',
    '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)',
    '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)',
    '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)',
    '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)',
    '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)',
    '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)',
    '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
    '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)',
    '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
    '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
    '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
    '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
    '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)']};


function launch(indexToPass, license) {
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter title: ", (title) => {
    rl.question("Enter description: ", (description) => {
        rl.question("Enter installation instructions: ", (installation) => {
            rl.question("Enter usage information: ", (usage) => {
                rl.question("Enter contribution guidelines: ", (contributing) => {
                    rl.question("Enter test instructions: ", (tests) => {
                        rl.question("Enter questions: ", (questions) => {
                            rl.question("Enter your github username: ", (githubUsername) => {
                                rl.question("Enter your email address: ", (emailAddress) => {
          const data = { title, description, installation, usage, contributing, tests, questions, githubUsername, emailAddress };
          const readme = generateReadme(indexToPass, license, data);
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
}

    const generateReadme = (indexToPass, license, data) => {
 
return indexToPass + `
      
# ${data.title}
<br>
${data.description}
<br>
<br>

## Table Of Contents
<br>
[Description](#Description) <br>
[Installation](#Installation) <br>
[Usage](#Usage) <br>
[License](#License) <br>
[Contributing](#Contributing) <br>
[Tests](#Tests) <br>
[Questions](#Questions) <br>
<br>
<br>
      
## Installation
<br>
${data.installation}
<br>
<br>
      
## Usage
<br>
${data.usage}
<br>
<br>

## License
<br>
`
+ `This project uses the ` + license + ` license, the license badge in the README header is a clickable link containing license information.` + 
`
<br>
<br>
      
## Contributing
<br>
${data.contributing}
<br>
<br>
      
## Tests
<br>
${data.tests}
<br>
<br>
      
## Questions
<br>
${data.questions}
<br>
<a href="mailto:${data.emailAddress}">You can contact me with any questions here</a>
<br>
<br>
 
`
};

 
async function renderLicenseBadge() {
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'licenseChosen',
      message: licenseBadges.question,
      choices: licenseBadges.options,
    },
  ])
  .then(answers => {
    let license = answers.licenseChosen;
        let indexToPass;

    for (let i= 0; i < 32; i++) {
        if (license == licenseBadges.options[i]) {
            indexToPass = i;
            break;
        }
    }
    launch(licenseBadges.badgeLinks[indexToPass], license);
  });
}

// function sets the license badge link up dependant on user selection and then calls readMeGenerator function
renderLicenseBadge();
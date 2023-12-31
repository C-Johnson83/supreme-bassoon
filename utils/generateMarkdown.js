// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  } else if (license === 'GNU General Public v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'BSD 2-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  } else if (license === 'Boost Software 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
  } else if (license === 'Eclipse Public 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
  } else if (license === 'GNU Affero General Public v3.0') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
  } else if (license === 'GNU General Public v2.0') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
  } else if (license === 'GNU Lesser General Public v3.0') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]';
  } else if (license === 'Mozilla Public 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else if (license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    'Apache 2.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'GNU General Public v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'BSD 2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'Boost Software 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'Creative Commons Zero v1.0 Universal': 'http://creativecommons.org/publicdomain/zero/1.0/',
    'Eclipse Public 1.0': 'https://opensource.org/licenses/EPL-1.0',
    'GNU Affero General Public v3.0': 'https://www.gnu.org/licenses/agpl-3.0',
    'GNU General Public v2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'GNU Lesser General Public v3.0': 'https://www.gnu.org/licenses/lgpl-3.0',
    'Mozilla Public 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'The Unlicense': 'http://unlicense.org/'
  };
  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
What are the steps required to install your project?  
${data.installation}

## Usage

${data.usage}

## License
${renderLicenseSection(data.license)}  
License Link  
${renderLicenseLink(data.license)}   
${renderLicenseBadge(data.license)}  

## Credits

${data.contribute}  

## Testing

${data.test}  

## Questions

For any questions please feel free to contact me at
<a href="https://github.com/${data.username}" target="_blank">Github</a>  
or by email ${data.email}

`;
}

module.exports = generateMarkdown;

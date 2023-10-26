function renderLicenseBadge(license) {
  if (license) {
    // You can define logic here to return the badge URL or Markdown for the selected license
    // For example, you could use a switch statement to return the appropriate badge URL
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache':
        return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
      // Add more cases for other licenses as needed
      default:
        return '';
    }
  }
  return ''; // If there's no license, return an empty string
}

function renderLicenseLink(license) {
  if (license) {
    // You can define logic here to return the URL for the license details
    // For example, you could provide links to the license text or information
    return `[License Details](https://opensource.org/licenses/${license})`;
  }
  return ''; // If there's no license, return an empty string
}

function renderLicenseSection(license) {
  if (license) {
    // You can format the license section here based on your preferences
    return `## License
  
  This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
  }
  return ''; // If there's no license, return an empty string
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${licenseSection ? '- [License](#license)' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions or need further assistance, you can reach me at ${data.email} or visit my [GitHub profile](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;

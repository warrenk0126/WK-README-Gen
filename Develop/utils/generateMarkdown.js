// Function to render the license badge based on the selected license
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache':
        return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
      default:
        return '';
    }
  }
  return '';
}

// Function to render a link to the license details
function renderLicenseLink(license) {
  if (license) {
    return `[License Details](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to render the license section in the README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
  }
  return '';
}

// Function to generate the complete README content
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

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions or need further assistance, you can reach me at ${data.email} or visit my [GitHub profile](https://github.com/${data.github}).

`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;

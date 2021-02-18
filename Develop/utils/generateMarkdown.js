// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of contents

* [Installation] (#installation)

* [Usage] (#usage)

* [License] (#license)

* [Contributing] (#contributing)

* [Tests] (#tests)

* [Questions] (#questions)

## Installation

${data.description}

'''
${data.install}
'''

## Usage

${data.using}

## License

${data.license}


## Contributing
${data.contribute}

## Tests

To run tests, run the following command:

'''
${data.tests}
'''

##Questions

${data.github}

${data.email}
  `;
}

module.exports = generateMarkdown;

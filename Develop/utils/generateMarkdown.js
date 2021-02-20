

//Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.title}

![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)



  ## Description
  ${data.description}

  ## Table of contents

-[Installation](#installation)

-[Usage](#usage)

-[License](#license)

-[Contributing](#contributing)

-[Tests](#tests)

-[Questions](#questions)

## Installation


\`\`\`
${data.install}
\`\`\`

## Usage

${data.using}

## License

(https://opensource.org/licenses/${data.license})


## Contributing
${data.contribute}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

### Github:
github.com/${data.github}

### Email:
${data.email}
  `;
}

module.exports = generateMarkdown;

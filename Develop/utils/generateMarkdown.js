const fs = require('fs');

const generatelicense = (type) => {
  let color;
  if (type === "ISC") color = "goldenrod";
  if (type === "Apache") color = "blue";
  if (type === "MPL") color = "green";
  if (type === "CC") color = "purple";
  if (type === "NONE") color = "red";

  return (
    `
## License
<img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44" />
  `
  );
};

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  test,
  github,
  email,
}) => {

  console.log("GENERATING PAGE...");
  const template = (
    `
# ${title}
## Description
${description}
## Table of Contents
  1. [installation](#installation)
  2. [usage](#usage)
  3. [contribution](#contribution)
  4. [test](#test)
  5. [github](#github)
  6. [email](#email)
  7. [license](#license)
## Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Test 
${test}
## GitHub: 
${github}
## Email: 
${email}
${generatelicense(license)}
    `
  );

  fs.writeFileSync('./output/README.md', template);
  console.log('TEMPLATE GENERATED!');
  process.exit();
};

module.exports = {
  generateMarkdown
};

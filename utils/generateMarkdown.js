function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    MIT: '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    Apache: '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    GPL: '![GPL License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)',
    BSD: '![BSD License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
  };

  return licenseBadges[license] || '';
}

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://opensource.org/licenses/GPL-3.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
  };

  return licenseLinks[license] || '';
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License\n\nThis project is licensed under the ${license} license. For more details, see the [license link](${renderLicenseLink(license)}).`;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}

  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features|| ""}
  ## Languages & Dependencies
  ${data.require|| ""}
  ## How to Use This Application:
  ${data.usage|| ""}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test|| ""}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
}

export default generateMarkdown;
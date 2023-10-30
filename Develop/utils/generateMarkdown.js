// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink; 

  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != "None") {
    licenseSection +=  "## License\n";
    licenseSection += "Please go to " + renderLicenseLink(license) + " to see sepcific licensing information.";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)
  const markdown = `# ${data.title}
**Table of Contents:** 
  -[Description](#desc)
  -[Installation](#installSect)
  -[Usage](#usageSect)
  -[Contributors](#contri)
  -[Testing](#testSect)
  -[License](#licenseSect)
  -[Questions](#questions)

  <a id="desc"></a>
  ## Description 
  ${data.description}
  <a id="installSect"></a>
  ## Installation 
  ${data.install}
  <a id="usageSect"></a>
  ## Usage 
  ${data.usage}
  <a id="contri"></a>
  ## Contributors
  ${data.contribution}
  <a id="testSect"></a>
  ## Testing
  ${data.test}
  <a id="licenseSect"></a>  
  ${badge}
  ${licenseSection}
  <a id="questions"></a>
  ## Questions
  If you have any questions about this application or the author you can reach me at ${data.email}.
  You can also mind me on Github at https://github.com/${data.github}.
`;
return markdown
}

module.exports = generateMarkdown;

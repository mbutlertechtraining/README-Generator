function generateMarkdown(data) {
    const avatar = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
    const licenseIcon = `http://img.shields.io/badge/license-${data.license}-brightgreen.svg`;

    return `
  ## ${data.title} 
  
  \n![${data.license}](${licenseIcon}) 
  
  ### App Demo
  ![](images/readme-generator.gif)
  
  ### User Story
  
  \`\`\`text
    AS A developer
    I WANT a README generator
    SO THAT can quickly create a professional README for a new project
  \`\`\`
  
  ### Acceptance Criteria
  
  \`\`\`text
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    WHEN I enter my project title
    THEN this is displayed as the title of the README
    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README
  \`\`\`
  
  ### Description
   *${data.description}*
    
  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)
  
  ### Installation
  Packages required to run this program are: ${data.installation}
  
  ### Usage
  Examples of how to use this program: ${data.usage}
  
  ### License
  ${data.license}
  
  ### Tests
  To test, run the following command: ${data.tests}
  
  ### Contributors
  ${data.contributer}
  
  ### Contact
  \n![Badge](${gitHub}) 
  \n![Profile Image](${avatar})
  \nView the project in GitHub at: ${data.url}
  \nIf you have any questions, contact the author directly at ${data.email}.`

}

module.exports = generateMarkdown;
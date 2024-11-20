// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs"; 
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input


const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project:',
  },
 // {
   // type: 'input',
    //name: 'screenshot',
    //message: 'Please provide a file path for the image you want to use for the screenshot.',
  //},

  {
    type: 'input',
    name: 'contributors',
    message: 'Who all worked on your project?',
  },
  {
    type: 'input',
    name: 'features',
    message: 'Please lay out some features of your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const dir = path.join(process.cwd(), 'dist');

  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
  }

  return fs.writeFileSync(path.join(dir, fileName), data);
}

// TODO: Create a function to initialize app
async function init() {
  console.log("Creating Professional README.md File...");
  const responses = await inquirer.prompt(questions);
  writeToFile("README.md", generateMarkdown({ ...responses }));
}

// Function call to initialize app
init();
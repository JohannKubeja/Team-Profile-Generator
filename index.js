// Node modules
const inquirer = require("inquirer");
const fs = require("fs")


// Role Modules 
const Engineer = require("./roles/engineer")
const Intern = require("./roles/intern")
const Manager = require("./roles/manager")

// Template module
const genSite = require('./source/generateSite')

const team = []

// This starts the funcion in order to ask what role and check what next prompts

const questions = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Please pick a role for your employee",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
        },
    ]).then(
        (answers) => {
            if (answers.role === 'Intern') {
                genIntern()
            } else if (answers.role === 'Engineer') {
                genEngineer()
            } else{
                genManager()
            }
        }
    )
}

// Generate the Intern section for the page name,id,email,school
const genIntern = async () => {

    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name of person?',
    },
    {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    },
    {
    type: 'input',
    name: 'school',
    message: 'What is the name of your School?',
    },
])
const {name,id,email,school} = answers
const newIntern = new Intern(name,id,email,school)
team.push(newIntern)

ask(team)
}

// Generate the engineer section for the page name,id,email,github
const genEngineer = async () => {

    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name of person?',
    },
    {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub?',
    },
])
const {name,id,email,github} = answers
const newEngineer = new Engineer(name,id,email,github)
team.push(newEngineer)

ask(team)
}

// Generate the manager section for the page name,id,email,officeid
const genManager = async () => {

    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name of person?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
    },
])
const {name,id,email,office}=answers
const newManager = new Manager(name,id,email,office)
team.push(newManager)

ask(team)
}

// This ask function will loop if the user wants to add more memebers 
const ask = async (team) => {
    const answers = await inquirer.prompt({
        type: "confirm",
        name: "ask",
        message: "Do you want to add anymore team members?",
        default: false
    })
    if (answers.ask){questions()}
    else{genHTML(team)}
}


// Function to generate file path
const genHTML = (team) => {
    fs.writeFileSync('./dist/team.html', genSite(team), 'utf-8')
}

questions()
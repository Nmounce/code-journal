//generate packages (json files to manage dependency files) by running: npm init -y (defaults all entries)
//then install a package from a different directory by running: npm i <file name from npm> (ex. inquirer)

const inq = require('inquirer') // node modules dont require a path,just reference the name
const fs = require('fs')


//if you are missing dependencies from a file run npm install and it will automatically download the packages listed oin the package.json file

//inquirer package can be used to make prompts -> EXAMPLE

inq.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: "username"
    },
    {
    type: "password",
    message: "enter your pw",
    name: "password"
    },
    {
        type: "password",
        message: "confirm it",
        name: "confirm"
        },
]).then(response => {
    let status;
    if (response.password === response.confirm){
        status = 'success'
        console.log('You did it!')
        }else {
            status = 'failed'
        }
        fs.appendFile('log.txt, `${Date.now()} ${status}`, (err) => {
            err ? console.log(err) : console.log(status)
        })
});

//EXAMPLE2

const inq = require('inquirer');
const fs = require('fs');

inq.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: "name"
    },
    {
    type: 'checkbox',
    message: "what languages do you know?",
    name: "stack",
    choices: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        type: "input",
        message: "preferred method of communication",
        name: "contact",
        choices: ['email', 'phone', 'yelling'],
        },
]).then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
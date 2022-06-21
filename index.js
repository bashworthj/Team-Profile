
const { prompt } = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');



const buildManager = [
    {
        type: 'input',
        message: 'Who is the team manager?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is their email',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is their Office Number?',
        name: 'officeNum',
    }
]
const buildTeam = [
    {
        type: 'list',
        message: 'Who would you like to add to your team?',
        choices: ['Engineer', 'Intern', 'My Team is Finished'],
        name: 'team'
    },
    {
        type: 'input',
        message: 'What is the Engineers name?',
        name: 'engineerName',
        when: answers => answers.team === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'engineerId',
        when: answers => answers.team === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is their email',
        name: 'engineerEmail',
        when: answers => answers.team === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is their github username',
        name: 'git',
        when: answers => answers.team === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is the Interns name?',
        name: 'internName',
        when: answers => answers.team === 'Intern'
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'internId',
        when: answers => answers.team === 'Intern'
    },
    {
        type: 'input',
        message: 'What is their email',
        name: 'internEmail',
        when: answers => answers.team === 'Intern'
    },
    {
        type: 'input',
        message: 'Where do they attend school',
        name: 'school',
        when: answers => answers.team === 'Intern'
    },


]



const init = async () => {

    const manData = await prompt(buildManager);
    let teamData = {};
    let teamArray = [];
    do {
        teamData = await prompt(buildTeam);
        teamArray.push(teamData);
    } while (teamData.team !== 'My Team is Finished')

    fs.writeFile('./output/team.html', genHtml(genMan(manData), genEng(teamArray), genInt(teamArray)), (err) =>
        err ? console.log(err) : console.log('Team Profile Has Been Created')
    );



};




init();

// 
const genHtml = (manager, engineer, intern) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <header class="row text-center">
            <h1 class="col-12 p-2 d-none d-xs-none d-md-block">My Team</h1>
        </header>
        <main>
            <div class="d-flex justify-content-evenly">
            ${manager}
            ${intern}
            ${engineer}
         
              
            </div>
        </main>
    </body>
    </html>`;
}

const genMan = (manData) => {
    const manager = new Manager(manData.managerName, manData.managerId, manData.managerEmail, manData.officeNum);
    return `    <div class="card" style="width: 18rem;">
    <div class="card-header bg-danger">${manager.getRole()}: ${manager.getName()}</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office #: ${manager.getOfficeNum()}</li>
    </ul>
</div>`
}


const genEng = (teamArray) => {
    let engineers = '';
    for (teamate of teamArray) {
        if (teamate.team === 'Engineer') {
            let engineer = new Engineer(teamate.engineerName, teamate.engineerId, teamate.engineerEmail, teamate.git)
            engineers += `    <div class="card" style="width: 18rem;">
            <div class="card-header bg-info">${engineer.getRole()}: ${engineer.getName()} </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</li>
            </ul>
        </div>`
        }
    }
    return engineers;
}


const genInt = (teamArray) => {
    let interns = '';
    for (teamate of teamArray) {
        if (teamate.team === 'Intern') {
            let intern = new Intern(teamate.internName, teamate.internId, teamate.internEmail, teamate.school)
            interns += `    <div class="card" style="width: 18rem;">
            <div class="card-header bg-warning">${intern.getRole()}: ${intern.getName()} </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>`
        }
    }
    return interns;
}
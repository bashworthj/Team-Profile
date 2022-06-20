
const { prompt } = require('inquirer');
const fs = require('fs');

const init = async () => {

    const data = await prompt([
        {
            type: 'input',
            message: 'Who is the team manager?',
            name: 'manager',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'employee',
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your Office Number?',
            name: 'office',
        },
        {
            type: 'confirm',
            message: 'Would you like to add an egineer',
            name: 'engineer-option',
        },
       
     
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'email',
        },

    ])

    const filename = `${data.manager}.html`;

    fs.writeFile(filename, readMeGen(data), (err) =>
        err ? console.log(err) : console.log('Team Profile Has Been Created')
    );


};

init();

// const colorLicense = (type) => {
//     let color;
//     if (type === "MPL") color = "red";
//     if (type === "GPL") color = "gray";
//     if (type === "Apache") color = "green";
//     if (type === "MIT") color = "blue";
//     if (type === "CC") color = "orange";
//     if (type === "BSD") color = "goldenrod";
  
//     return (
//       `<img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" />`
//     );
//   };


const readMeGen = data => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html> `;
  }








                               // T E S T I N G . . . 
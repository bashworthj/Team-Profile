const Engineer = require('./lib/Engineer')


describe('Engineer', () => {
  it('should accept github as an argument and set its github property accordingly', () => {
    const newGit = "bashworthj"
    const newInsOfEmp = new Employee(newGit);
    expect(newInsOfEmp.github).toEqual(newGit);
  });
});

describe('getGithub Function', () => {
  it('should get the github username of the desired instance of Engineer', () => {
    const newGit = "bashworthj"
    const newInsOfEmp = new Employee(newGit);
    expect(newInsOfEmp.getGithub()).toEqual(newGit);
  });
});

describe('getRole Function', () => {
  it('should get the role of the desired instance of engineer', () => {
    const role = 'Engineer';
    const newInsOfEmp = new Employee('Ben', 32, newEmail);
    expect(newInsOfEmp.getRole()).toEqual(role);
  });
});
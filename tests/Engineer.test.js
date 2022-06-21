const Engineer = require('../lib/Engineer')


describe('Engineer', () => {
  it('should accept github as an argument and set its github property accordingly', () => {
    const newGit = "bashworthj"
    const newInsOfEng = new Engineer(newGit);
    expect(newInsOfEng.github).toEqual(newGit);
  });
});

describe('getGithub Function', () => {
  it('should get the github username of the desired instance of Engineer', () => {
    const newGit = "bashworthj"
    const newInsOfEng = new Engineer(newGit);
    expect(newInsOfEng.getGithub()).toEqual(newGit);
  });
});

describe('getRole Function', () => {
  it('should get the role of the desired instance of engineer', () => {
    const role = 'Engineer';
    const newInsOfEng = new Engineer('Ben', 32, 'benjas@gmail.com', 'bashworthj');
    expect(newInsOfEng.getRole()).toEqual(role);
  });
});
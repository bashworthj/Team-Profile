const Intern = require('../lib/Intern')


describe('Intern', () => {
  it('should accept school as an argument and set its school property accordingly', () => {
    const newSchool = "UNCC";
    const newInsOfInt = new Intern(newSchool);
    expect(newInsOfInt.school).toEqual(newSchool);
  });
});

describe('getSchool Function', () => {
  it('should get the school of the desired instance of Intern', () => {
    const newSchool = "UNCC";
    const newInsOfInt = new Intern(newSchool);
    expect(newInsOfInt.getSchool).toEqual(newSchool);
  });
});

describe('getRole Function', () => {
  it('should get the role of the desired instance of Intern', () => {
    const role = 'Intern';
    const newInsOfInt = new Intern('Ben', 32, 'benjas@gmail.com', 'UNCC');
    expect(newInsOfInt.getRole()).toEqual(role);
  });
});
const Manager = require('../lib/Manager')


describe('Manager', () => {
  it('should accept office number as an argument and set its office number property accordingly', () => {
    const newOfficeNum = 903;
    const newInsOfMan = new Manager('Ben', 32, 'benjas@gmail.com', newOfficeNum);
    expect(newInsOfMan.officeNumber).toEqual(newOfficeNum);
  });
});


describe('getRole Function', () => {
  it('should get the role of the desired instance of Manager', () => {
    const role = 'Manager';
    const newInsOfMan = new Manager('Ben', 32, 'benjas@gmail.com', 903);
    expect(newInsOfMan.getRole()).toEqual(role);
  });
});
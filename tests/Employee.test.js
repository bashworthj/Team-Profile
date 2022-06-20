const Employee = require("./lib/Employee");

describe('Employee', () => {
  it('should create a new instance of Employee as an object', () => {
    const newInsOfEmp = new Employee();
    expect(typeof(newInsOfEmp)).toEqual('object');
  });
  it('should accept name as an argument and set its name property accordingly', () => {
    const newName = "Ben"
    const newInsOfEmp = new Employee(newName);
    expect(newInsOfEmp.name).toEqual(newName);
  });
  it('should accept id as an argument and set its id property accordingly', () => {
    const newId = 32;
    const newInsOfEmp = new Employee('Ben', newId);
    expect(newInsOfEmp.id).toEqual(newId);
  });
  it('should accept email as an argument and set its email property accordingly', () => {
    const newEmail = 'bashworth@gmail.com';
    const newInsOfEmp = new Employee('Ben', 32, newEmail);
    expect(newInsOfEmp.email).toEqual(newEmail);
  });
});

describe('getName Function', () => {
  it('should get the name of the desired instance of employee', () => {
    const newName = "Ben"
    const newInsOfEmp = new Employee(newName);
    expect(newInsOfEmp.getName()).toEqual(newName);
  });
});

describe('getId Function', () => {
  it('should get the id of the desired instance of employee', () => {
    const newId = 32;
    const newInsOfEmp = new Employee('Ben', newId);
    expect(newInsOfEmp.getId()).toEqual(newId);
  });
});

describe('getEmail Function', () => {
  it('should get the email of the desired instance of employee', () => {
    const newEmail = 'bashworth@gmail.com';
    const newInsOfEmp = new Employee('Ben', 32, newEmail);
    expect(newInsOfEmp.getEmail()).toEqual(newEmail);
  });
});

describe('getRole Function', () => {
  it('should get the role of the desired instance of employee', () => {
    const role = 'Employee';
    const newInsOfEmp = new Employee('Ben', 32, newEmail);
    expect(newInsOfEmp.getRole()).toEqual(role);
  });
});
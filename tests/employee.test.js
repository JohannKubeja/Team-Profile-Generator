const Employee = require('../roles/employee')

// This will test for an actual employee object with base items 'string,number,string'
test('Create employee object', () => {
    const employee = new Employee('Smith',1, 'Smith@gmail.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))

});
// The first test checks that the getName method of the Employee class returns a string.
//The second test checks that the getId method of the Employee class returns a number.
//The third test checks that the getEmail method of the Employee class returns a string that contains the email address of the employee.
//The fourth test checks that the getRole method of the Employee class returns the string "Employee".

test('gets name', () => {
    const employee = new Employee('Smith', 2, 'Smith@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets ID', () => {
    const employee = new Employee('Smith', 3, 'Smith@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets email', () => {
    const employee = new Employee('Smith', 4, 'Smith@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Smith', 5, 'Smith@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
const Manager = require('../roles/manager')

test('gets name', () => {
    const manager = new Manager('Smith', 2, 'Smith@gmail.com', 4);

    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets ID', () => {
    const manager = new Manager('Smith', 2, 'Smith@gmail.com', 4);

    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets email', () => {
    const manager = new Manager('Smith', 2, 'Smith@gmail.com', 4);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test('gets office number', () => {
    const manager = new Manager('Smith', 2, 'Smith@gmail.com', 4);

    expect(manager.getOffice()).toEqual(expect.any(Number))
})
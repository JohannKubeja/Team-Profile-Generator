const Engineer = require('../roles/engineer')

// These tests check for 'name,id,email,github'
test('gets name', () => {
    const engineer = new Engineer('Smith', 1, 'Smith@gmail.com', 'githubusername01')

    expect(engineer.getName()).toEqual(expect.any(String))
});

test('gets ID', () => {
    const engineer = new Engineer('Smith', 3, 'Smith@gmail.com', 'githubusername01');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets email', () => {
    const engineer = new Engineer('Smith', 4, 'Smith@gmail.com', 'githubusername01');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('gets GitHub', () => {
    const engineer = new Engineer('Smith', 4, 'Smith@gmail.com', 'githubusername01');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
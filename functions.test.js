//const functions = require('./functions');
import functions from './functions.js';

//toBe() - it is for primitive types
it(`Adds 2 + 2 to equal 4`, () => {
    expect(functions.add(2, 2)).toBe(4);
});

//.not.toBe()
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull()
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy()
test('should be falsey', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

//toEqual() - it is for non-primitive types (objects + arrays)
test('user should be Brad Ali', () => {
    expect(functions.createUser())
    .toEqual({firstName: 'Brad', lastName: 'Ali'});
});

//toBeLessThan()
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

//toContain()
test('admin should be in usernames', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

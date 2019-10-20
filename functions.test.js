const functions = require('./functions');

const initDB = () => console.log('DB Initialized');
const finishDB = () => console.log('DB finished');

/* 
beforeEach(()=> initDB()); //executes one function before each test
afterEach(()=> finishDB());//executes one function after each test

beforeAll(); // executes once
afterAll(); //executes once 
*/

const nameCheck = () => console.log('Checking name...');

describe('Checking names', () => {
    beforeEach(()=> nameCheck());
    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });
    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
    test('User is Bob', () => {
        const user = 'Bob';
        expect(user).toBe('Bob');
    });
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull | toBeUndefined | toBeDefined | toBeTruthy | toBeFalsy

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () =>{
    expect(functions.checkValue(null)).toBeFalsy();
});


//toEqual for objects and arrays
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});


//toBeLessThan or toBeLessThanOrEqual
test('Should be under 1600', () =>{
    expect(800+700).toBeLessThan(1600);
});

//Regex checks literals
test('There is no I in Team', () => {
    expect('team').not.toMatch(/I/i); //Regular expression first capital and regular I
});

//Arrays
test('Admin should be in usernames', ()=> {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});


// --- ASYNC ---

test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

//with async and await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});


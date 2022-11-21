// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber True Cases
test('(669) 306-2484 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(669) 306-2484')).toBe(true);  
});

test('(418) 326-7884 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(418) 326-7884')).toBe(true);  
});

//isPhoneNumber False Cases
test('46915207891 is not a valid phone number (Extra digit)', () => {
    expect(functions.isPhoneNumber('46915207891')).toBe(false);  
});

test('Alphabets is not a valid phone number (Not numbers)', () => {
    expect(functions.isPhoneNumber('Alphabets')).toBe(false);  
});

//**************************************************************

//isEmail True Cases
test('alwlow@hotmail.com is a valid email', () => {
    expect(functions.isEmail('alwlow@hotmail.com')).toBe(true);  
});

test('true@gmail.com is a valid email', () => {
    expect(functions.isEmail('true@gmail.com')).toBe(true);  
});

//isEmail False Cases
test('alwlow@hotmail is not a valid email (No .com)', () => {
    expect(functions.isEmail('alwlow@hotmail')).toBe(false);  
});
  
test('$@**^@#*!)()@gmail.com is not a valid email (Various Symbols)', () => {
    expect(functions.isEmail('$@**^@#*!)()@gmail.com')).toBe(false);  
});

//**************************************************************

//isStrongPassword True Cases
test('c_1r is a valid strong password', () => {
    expect(functions.isStrongPassword('c_1r')).toBe(true);  
});

test('are1_tsna23_raw is a valid strong password', () => {
    expect(functions.isStrongPassword('are1_tsna23_raw')).toBe(true);  
});

//isStrongPassword False Cases
test('1_ecrasd is not a valid strong password (password starts with number)', () => {
    expect(functions.isStrongPassword('1_ecrasd')).toBe(false);  
});

test('are1_tsna23_rawadsa_131adada is not a valid strong password (Over character limit)', () => {
    expect(functions.isStrongPassword('are1_tsna23_rawadsa_131adada')).toBe(false);  
});

//**************************************************************

//isDate True Cases
test('11/20/2022 is a valid date', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);  
});

test('1/2/2002 is a valid date', () => {
    expect(functions.isDate('1/2/2002')).toBe(true);  
});

//isDate False Cases
test('11/20/22222 is not a valid date (Extra digit in year)', () => {
    expect(functions.isDate('11/20/22222')).toBe(false);  
});

test('aa/bb/cccc is not a valid date (Not numbers)', () => {
    expect(functions.isDate('aa/bb/cccc')).toBe(false);  
});

//**************************************************************

//isHexColor True Cases
test('#FFF is a valid hex color', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);  
});

test('#FF5733 is a valid hex color', () => {
    expect(functions.isHexColor('#FF5733')).toBe(true);  
});

//isHexColor False Cases
test('AA11AA1 is not a valid hex color (7 letters)', () => {
    expect(functions.isHexColor('AA11AA1')).toBe(false);  
});

test('#FF89 is not a valid hex color (4 letters)', () => {
    expect(functions.isHexColor('#FF89')).toBe(false);  
});
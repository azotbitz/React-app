const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('Correct Value', () => {
        expect(validateValue(70)).toBe(true)
    });
    test('More Than Expect', () => {
        expect(validateValue(120)).toBe(false)
    })
})
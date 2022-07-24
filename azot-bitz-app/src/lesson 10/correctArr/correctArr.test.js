
const correctArr = require('./correctArr');

describe('correctArr', () => {
    test('Words Array', () => {
        expect(correctArr(['hello', 'my', 'dear', 'friends'])).not.toEqual([])
    });
    test('Digit Array', () => {
        expect(correctArr([1, 2, 0])).toEqual([])
    });
    test('Small Word Array', () => {
        expect(correctArr(['hi', 'bye', 'try'])).toEqual([])
    });
})

const promiseCheck = require('./promiseCheck')

const callback = (digit) => {
    if(digit > 0 && digit < 3){
        return true;
    }
    return false;
}

describe('Check New Promise', () => {
    test('Creating New Promise', () => {
        expect(promiseCheck(callback(1), 1000)).not.toBeNaN();
    });
    test('Creating New NaN Promise', () => {
        expect(promiseCheck(callback(300), 1000)).toBeNaN();
    })
})
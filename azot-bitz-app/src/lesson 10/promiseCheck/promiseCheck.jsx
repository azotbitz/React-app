
const promiseCheck = (cb, ms) => {
    if(cb === false){
        return NaN;
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cb())}, ms)
    })
}

module.exports = promiseCheck;
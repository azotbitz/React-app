
const validateValue = (value) => {
    if(value < 100 && value > 0) {
        return true;
    } return false;
}

module.exports = validateValue;
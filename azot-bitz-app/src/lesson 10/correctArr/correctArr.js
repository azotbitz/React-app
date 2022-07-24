
const correctArr = (arr) => {
    const array = arr.filter(word => word.length > 3)
    return array;
}

module.exports = correctArr;
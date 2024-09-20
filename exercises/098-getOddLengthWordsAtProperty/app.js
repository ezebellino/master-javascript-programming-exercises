// Write your function here
const getOddLengthWordsAtProperty = (object, key) => {
    if (Array.isArray(object[key]) && object[key].length > 0){
        return object[key].filter(value => value.length % 2 !== 0)
    }
    return [];
}
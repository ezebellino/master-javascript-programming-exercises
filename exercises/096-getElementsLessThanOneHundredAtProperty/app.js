// Write your function here
const getElementsLessThan100AtProperty = (object, key) => {
    if (Array.isArray(object[key]) && object[key].length > 0){
        return object[key].filter(value => value < 100)
    }
    return [];
}
// Write your function here
const getElementsThatEqual10AtProperty = (object, key) => {
    if (Array.isArray(object[key]) && object[key].length > 0){
        return object[key].filter(value => value === 10)
    }
    return [];
}

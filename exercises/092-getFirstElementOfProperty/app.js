// Write your function here
const getFirstElementOfProperty = (object, key) => {
    if (Array.isArray(object[key]) && object[key].length > 0){
        return object[key][0];
    }
    return undefined;
}
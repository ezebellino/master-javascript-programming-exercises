// Write your function here
const getNthElementOfProperty = (object, key, num) => {
    if (Array.isArray(object[key]) && object[key].length > 0){
        return object[key][num];
    }
    return undefined;
}
n
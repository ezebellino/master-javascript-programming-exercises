// Write your function here
const getLastElementOfProperty = (object, key) => {
    if (Array.isArray(object[key]) && object[key].length > 0){
        let newArr = object[key].reverse()
        return newArr[0];
    }
    return undefined;
}


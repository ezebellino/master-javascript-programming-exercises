function getElementOfArrayProperty(object, key, index) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
        return object[key][index];
    }
    return undefined;
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'

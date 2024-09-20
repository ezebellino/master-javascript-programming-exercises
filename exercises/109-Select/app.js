// Write your function here
const select = (arr, obj) => {
    let newObj = {}
    for (const element of arr) {
       if(obj.hasOwnProperty(element)){
        newObj[element] = obj[element];
       } 
    }
    return newObj;   
}
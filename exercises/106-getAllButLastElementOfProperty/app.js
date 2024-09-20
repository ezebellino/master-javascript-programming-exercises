function getAllButLastElementOfProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
      let newArr = object[key].pop();
      return object[key]
  }
  return []; 
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]

function getEvenElementsAtProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
      return object[key].filter(value => value % 2 === 0)
  }
  return []; 
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

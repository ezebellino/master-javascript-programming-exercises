function getSquaredElementsAtProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
      return object[key].map(value => value * value)
  }
  return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

function getOddElementsAtProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
      return object[key].filter(value => value % 2 !== 0)
  }
  return [];
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

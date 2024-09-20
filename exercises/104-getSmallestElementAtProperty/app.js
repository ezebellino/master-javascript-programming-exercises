function getSmallestElementAtProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
      let arrOrder = (object[key]).sort()
      return arrOrder[0]
  }
  return [];
}

let object = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(object, 'key');
console.log(output); // --> 1

function getLargestElementAtProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
      let arrOrder = (object[key]).sort((a, b) => a - b)
      return arrOrder.reverse()[0]
  }
  return []; 
}

let object = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(object, 'key');
console.log(output); // --> 4

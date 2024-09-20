function getProductOfAllElementsAtProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0){
      let product = object[key].reduce((previousValue, currentValue) => previousValue * currentValue, 1);
      return product
    }
  return 0; 
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

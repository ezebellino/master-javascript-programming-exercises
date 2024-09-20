function getSumOfAllElementsAtProperty(object, key) {
    // your code here
    if (Array.isArray(object[key]) && object[key].length > 0) {
        let sum = object[key].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return sum 
      }
      return 0;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

function getAverageOfElementsAtProperty(object, key) {
  // your code here
  if (Array.isArray(object[key]) && object[key].length > 0) {
    let sum = object[key].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum / object[key].length
  }
  return 0;
}
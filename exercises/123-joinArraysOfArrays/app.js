function joinArrayOfArrays(arr) {
  // your code here
  return [...arr].reduce((firstElem, secondElem) => {
    return firstElem.concat(secondElem);
  },[]);
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']

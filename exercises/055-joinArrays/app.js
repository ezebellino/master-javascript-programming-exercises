function joinArrays(arr1, arr2) {
  // your code here
  let arr = []
  return arr.concat(arr1, arr2)
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

function computeSumOfAllElements(arr) {
  // your code here
  if(arr.length === 0) return 0;
  return [...arr].reduce((firstElement, secondElement) =>{
    return firstElement + secondElement;
  }, 0)
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6

function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length > 0){
    return arr.reduce((elementA, elementB) => elementA * elementB, 1);
  }
  return 0;
  
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

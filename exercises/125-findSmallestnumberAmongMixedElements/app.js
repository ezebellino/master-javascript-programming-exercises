function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length === 0) return 0;
  let arrNum = arr.filter(Elem => typeof Elem === 'number');
  if(arrNum.length === 0) return 0;
  let arrOrd = arrNum.sort((a,b) => a - b);
  return arrOrd[0];
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

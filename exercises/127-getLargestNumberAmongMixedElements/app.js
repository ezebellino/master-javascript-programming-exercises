function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0) return 0;
    let arrNum = arr.filter(Elem => typeof Elem === 'number');
    if(arrNum.length === 0) return 0;
    let arrOrd = arrNum.sort((a,b) => b - a);
    return arrOrd[0];
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

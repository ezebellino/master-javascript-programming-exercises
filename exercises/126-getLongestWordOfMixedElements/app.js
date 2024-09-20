function getLongestWordOfMixedElements(arr) {
    // your code here
    if(arr.length === 0) return '';
    let arrStr = arr.filter(Elem => typeof Elem === 'string');
    if(arrStr.length === 0) return '';
    let arrOrd = arrStr.sort((a,b) => a.length - b.length);
    return arrOrd.reverse()[0];
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

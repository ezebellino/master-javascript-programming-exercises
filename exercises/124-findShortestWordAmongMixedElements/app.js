function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0) return '';
    let arrStr = arr.filter(Elem => typeof Elem === 'string');
    if(arrStr.length === 0) return '';
    let arrOrd = arrStr.sort((a,b) => a.length - b.length);
    return arrOrd[0];
}

let output = findShortestWordAmongMixedElements([]);
console.log(output); // --> 'two'

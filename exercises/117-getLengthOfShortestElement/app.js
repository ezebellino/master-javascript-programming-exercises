function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0) return 0;
    return arr.reduce((strPrv, strAcc) => {
        return strPrv.length <= strAcc.length ? strPrv : strAcc;
    }).length;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

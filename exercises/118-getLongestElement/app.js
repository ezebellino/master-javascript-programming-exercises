function getLongestElement(arr) {
    // your code here
    if (arr.length === 0) return '';
    return arr.reduce((strPrv, strAcc) => {
        return strPrv.length >= strAcc.length ? strPrv : strAcc;
    }); 
}

let output = getLongestElement(['one', 'two', 'eight', 'three', 'seven']);
console.log(output); // --> 'three'

function getLengthOfLongestElement(arr) {
    // Your code here
    return [...arr].reduce((strPrv, strAcc) => {
        return strPrv.length > strAcc.length ? strPrv.length : strAcc.length;

    }, 0)
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

function filterOddLengthWords(words) {
    // your code here
    let newArr = words.filter(word => word.length % 2 !== 0);
    return newArr
}


let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']

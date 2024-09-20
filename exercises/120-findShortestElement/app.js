function findShortestElement(arr) {
    // your code here
    if(arr.length === 0) return '';
    return [...arr].reduce((firstWord, secondWord) => {
        return firstWord.length <= secondWord.length ? firstWord : secondWord;
    },0)
}

let output = findShortestElement(['z', 'two', 'three']);
console.log(output); // --> 'a'
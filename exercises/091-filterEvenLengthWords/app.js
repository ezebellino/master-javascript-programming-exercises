function filterEvenLengthWords(words) {
    // your code here
    let newArr = words.filter(word => word.length % 2 == 0);
    return newArr
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

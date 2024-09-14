function countCharacter(str, char) {
    // your code here
    let result = [...str.matchAll(char)]
    return result.length
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

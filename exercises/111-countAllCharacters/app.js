// Write your function here
const countAllCharacters = (str) => {
    let characterCount = {};

    for (let char of str) {
      return [...str].reduce((acc, char) => {
        acc[char] = acc[char] ? acc[char] + 1 : 1;
        return acc;
      }, {});
    }
  
    return characterCount;
  }
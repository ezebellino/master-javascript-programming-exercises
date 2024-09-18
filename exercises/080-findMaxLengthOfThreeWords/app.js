// Write your function here
const findMaxLengthOfThreeWords = (word1, word2, word3) => {
    const str1 = word1.length;
    const str2 = word2.length;
    const str3 = word3.length;
    return Math.max(str1,str2,str3)
}
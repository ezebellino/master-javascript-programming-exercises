// Write your function here
const findMinLengthOfThreeWords = (string1, string2, string3) => {
    /*if (string3.length < string2.length && string3.length < string1.length){
        return string3.length;
    } if (string2.length < string1.length && string2.length < string3.length) {
        return string2.length;
    } else {
        return string1.length
    }*/
   /// Mas simple, definiendo 3 constantes
   const str1 = string1.length;
   const str2 = string2.length;
   const str3 = string3.length;
   return Math.min(str1,str2,str3)
}
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
Example:3
// 1. Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result


let a = " lisen";
let b = " silent";
let c = (a.trim().split ( "").sort()).join("");
console.log(c);
let d = (b.trim().split( "").sort()).join("");
console.log (d);

function Anagram (c,d) { 
    if (c === d){
        console.log("Two words are anagram")
    }else {
        console.log( "Not an anagram word ")
    }
}
Anagram(c,d)




// }


// https://leetcode.com/problems/length-of-last-word/
(() => {
    function lengthOfLastWord(s: string): number {
        // We can trim te sentence first so that any last spaces are removed
        // Split the sentence into words using space
        // Take the last element of array and return its length

        return s.trim().split(' ').pop()!.length;

        // Non Null Assertion operator ! is used to tell the compiler that we are sure that the value is not null or undefined
        
    };

    console.log(lengthOfLastWord("Hello World"));
    console.log(lengthOfLastWord("   fly me   to   the moon  "));
    console.log(lengthOfLastWord("luffy is still joyboy"));

})()
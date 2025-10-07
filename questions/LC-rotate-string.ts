// https://leetcode.com/problems/rotate-string
(() => {

    function rotateString(s: string, goal: string): boolean {
        // Check if goal is  substring of s + s
        return s.length === goal.length && (s + s).includes(goal);
    };

    console.log(rotateString("abcde", "cdeab")); // true
    console.log(rotateString("abcde", "abced")); // false

})();
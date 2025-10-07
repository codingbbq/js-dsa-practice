// https://leetcode.com/problems/valid-anagram

(() => {

    function isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const freq: Map<string, number> = new Map();

        for(const char of s) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }

        // Now loop through t and remove the count of from freq map
        for(const char of t) {
            freq.set(char, (freq.get(char) || 0) - 1)
        }

        // for both the strings to be anagar, the char in freq map should have all values === 0
        for(const count of freq.values()) {
            if(count !== 0) return false;
        }

        return true;

    }

    console.log(isAnagram("anagram", "nagaram")); // true
    console.log(isAnagram("rat", "car")); // false

})();
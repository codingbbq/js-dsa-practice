// https://leetcode.com/problems/valid-anagram/description/

(() => {

    function isAnagram(s: string, t: string): boolean {
        // First check if the length is equal
        if(s.length !== t.length) {
            return false;
        };
        
        const a = new Map<string, number>();
        const b = new Map<string, number>();

        const len = s.length;

        for(let i = 0; i < len; i++) {
            a.set(s[i], (a.get(s[i]) ?? 0) + 1);
            b.set(t[i], (b.get(t[i]) ?? 0) + 1);
        }

        let isAnagram = true;

        a.forEach((value, key) => {
            if (value !== b.get(key)) {
                isAnagram = false;
            }
        });

        return isAnagram;
    };

    console.log(isAnagram("anagram", "nagaram"));
    console.log(isAnagram("cat", "rat"));

})();

// https://leetcode.com/problems/isomorphic-strings

(() => {

    function isIsomorphic(s: string, t: string): boolean {
        if(s.length != t.length) return false;

        const mapSToT: Map<string, string> = new Map();
        const mapTToS: Map<string, string> = new Map();
        for(let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];
            if(!mapSToT.has(charS) && !mapTToS.has(charT)) {
                mapSToT.set(charS, charT);
                mapTToS.set(charT, charS);
            } else if(mapSToT.get(charS) !== charT || mapTToS.get(charT) !== charS) {
                return false;
            }
        }
        return true;
    };

    console.log(isIsomorphic("egg", "add")); // true
    console.log(isIsomorphic("foo", "bar")); // false

})();
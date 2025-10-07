// https://leetcode.com/problems/consecutive-characters

(() => {
	function maxPower(s: string): number {
        if(s.length === 0) return 0;
        let power = 1;
        let local = 1;
        for(let i = 1; i < s.length; i++) {
            if(s[i] === s[i-1]) {
                local += 1;
                power = Math.max(power, local);
            } else {
                local = 1;
            }
        }
        return power;
    }
    console.log(maxPower("cc"));
    console.log(maxPower("abbcccddddeeeeedcba"));
})();

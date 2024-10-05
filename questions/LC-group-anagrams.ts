// https://leetcode.com/problems/group-anagrams/description/
(() => {

    function groupAnagrams(strs: string[]): string[][] {
        const output: string[][] = [];
        const sorted = new Map<string, number[]>();
        for(let i = 0;  i < strs.length; i++) {
            const s = strs[i].split('').sort().join('');
            if (sorted.has(s)) {
                sorted.get(s)?.push(i);
            } else {
                sorted.set(s, [i]);
            }
        }

        sorted.forEach((value, _) => {
            let arr: string[] = [];
            value.forEach(item => {
                arr.push(strs[item])
            })
            output.push(arr);
        });

        return output;
    };

    console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
    console.log(groupAnagrams([""]));
})();

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
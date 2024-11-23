// https://leetcode.com/problems/longest-consecutive-sequence/description/

(() => {
    function longestConsecutive(nums: number[]): number {
        // First conver the nums array into a set
        // We need to find the start of a sequence. How do we know that?
        // We take each number and in set check if the number - 1 exists. If it does, then it is not the start of a sequence.
        // If it does not exist, then it is the start of a sequence, so we can look for a sequence by keep adding 1 and checking in the set and at the same time maintaining the count
        
        const set = new Set<number>(nums);
        let count = 0;

        for(const n of set) {
            if(!set.has(n - 1)) {
                // start of a sequence.
                let current = n;
                let currentCount = 1;
                while(set.has(current + 1)) {
                    currentCount++;
                    current++;
                }
                count = Math.max(count, currentCount);
            }
        }

        return count;
    };

    console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
})();
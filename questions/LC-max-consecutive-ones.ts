// https://leetcode.com/problems/max-consecutive-ones/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-i

(() => {
	function findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let count = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 1) {
                count++;
            } else {
                count = 0;
            }
            max = Math.max(count, max);
        }
        return max;
    }

    console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
    console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
})();

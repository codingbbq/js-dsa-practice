// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/?envType=daily-question&envId=2026-01-02

(() => {
	function repeatedNTimes(nums: number[]): number {
        const map = new Map<number, number>();
        let repeated = 0;
        for(let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])) {
                repeated = nums[i];
                break;
            } else {
                map.set(nums[i], 0);
            }
        }

        return repeated;
    }

    console.log(repeatedNTimes([1,2,3,3]));
    console.log(repeatedNTimes([2,1,2,5,3,2]));
    console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));
})();

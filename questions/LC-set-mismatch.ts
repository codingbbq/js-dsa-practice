// https://leetcode.com/problems/set-mismatch/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-ii

(() => {
	function findErrorNums(nums: number[]): number[] {
        const map = new Map<number, number>();
        let total = 0;
        const result = [0, 0];
        for(let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])) {
                result[0] = nums[i];
            } else {
                map.set(nums[i], 1);
            }

            total += nums[i];
        }

        // sum of first n numbers = n * (n + 1) / 2
        result[1] = (nums.length * (nums.length + 1) / 2) - (total - result[0]);

        return result;
    }

    console.log(findErrorNums([1,2,2,4]));
    console.log(findErrorNums([1,1]));
})();

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-ii

(() => {
	function findDisappearedNumbers(nums: number[]): number[] {
		for(let i = 0; i < nums.length; i++) {
			const idx = Math.abs(nums[i]) - 1;
			if(nums[idx] > 0) nums[idx] = -nums[idx];
		}

		const res: number[] = [];
		for(let i = 0; i < nums.length; i++) {
			if(nums[i] > 0) res.push(i+1);
		}

		return res;
    }

	console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
	console.log(findDisappearedNumbers([1, 1])); // [2]
})();

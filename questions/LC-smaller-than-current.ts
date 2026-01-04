// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-ii

(() => {
	function smallerNumbersThanCurrent(nums: number[]): number[] {
		const freq = new Array(102).fill(0);
		for (const x of nums) freq[x + 1]++;
		for (let i = 1; i < freq.length; i++) freq[i] += freq[i - 1];
		return nums.map((x) => freq[x]);
	}

	console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
	console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
	console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
})();

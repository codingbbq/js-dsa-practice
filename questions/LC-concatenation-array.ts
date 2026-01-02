// https://leetcode.com/problems/concatenation-of-array/

(() => {
	function getConcatenation(nums: number[]): number[] {
		return [...nums, ...nums];
	}

	console.log(getConcatenation([1, 2, 1]));
})();

// https://leetcode.com/problems/top-k-frequent-elements/description/
(() => {
	function topKFrequent(nums: number[], k: number): number[] {
		const map = new Map<number, number>();

		for (let i = 0; i < nums.length; i++) {
			if (map.has(nums[i])) {
				map.set(nums[i], map.get(nums[i])! + 1);
			} else {
				map.set(nums[i], 1);
			}
		}

		let output: number[] = [];
		for (let i = 0; i < k; i++) {
			let max = 0;
			let key = 0;
			map.forEach((value, k) => {
				if (value > max) {
					max = value;
					key = k;
				}
			});
			output.push(key);
			map.delete(key);
		}
		return output;
	}
	console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
})();

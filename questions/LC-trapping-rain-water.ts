// https://leetcode.com/problems/trapping-rain-water/

(() => {
	function trap(height: number[]): number {
		let left = 0;
		let right = height.length - 1;
		let leftMax = 0;
		let rightMax = 0;
		let trappedWater = 0;

		while (left <= right) {
			if (leftMax <= rightMax) {
				if (height[left] > leftMax) {
					leftMax = height[left];
				} else {
					trappedWater += leftMax - height[left];
				}
				left++;
			} else {
				if (height[right] > rightMax) {
					rightMax = height[right];
				} else {
					trappedWater += rightMax - height[right];
				}
				right--;
			}
		}

		return trappedWater;
	}

    console.log(trap([4,2,0,3,2,5])); // 9
})();

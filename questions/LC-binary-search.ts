// https://leetcode.com/problems/binary-search
(() => {

	function search(nums: number[], target: number): number {

        // Early Escapes
        if(nums[0] === target) return 0;
        if(nums[0] > target) return -1;
        if(nums[nums.length - 1] < target) return -1;
        if(nums[nums.length - 1] === target) return nums[nums.length - 1];

        let left = 0;
        let right = nums.length - 1;
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] < target) {
                left = mid + 1;    
            } else if(nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] == target) {
                return mid;
            }
        }
        return -1;
    }

    console.log(search([5], 5)); // 0
    console.log(search([-1,0,3,5,9,12], 9)); // 4
    console.log(search([-1,0,3,5,9,12], 2)); // -1
})();

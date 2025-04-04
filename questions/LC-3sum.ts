// https://leetcode.com/problems/3sum/description/
(() => {

    function threeSum(nums: number[]): number[][] {
        const reseult: number[][] = [];
        
        // Sort the array
        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length - 2; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if(sum === 0) {
                    reseult.push([nums[i], nums[left], nums[right]]);

                    while(left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }

                    while(left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if(sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }

        }
        return reseult;
    };

    console.log(threeSum([-1,0,1,2,-1,-4]));

})();
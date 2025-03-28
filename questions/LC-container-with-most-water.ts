// https://leetcode.com/problems/container-with-most-water/description/

(() => {
    function maxArea(height: number[]): number {
        let result = 0;
        let left = 0;
        let right = height.length - 1;

        while(left < right) {
            const area = (right - left) * Math.min(height[left], height[right]);
            result = Math.max(result, area);

            if(height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    };

    console.log(maxArea([1,8,6,2,5,4,8,3,7]));
})();
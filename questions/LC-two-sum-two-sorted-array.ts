// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
(() => {

    function twoSum(numbers: number[], target: number): number[] {
        let l = 0;
        let r = numbers.length - 1;
        while (l < r) {
            if(numbers[l] + numbers[r] > target) {
                r--;
            } else if(numbers[l] + numbers[r] < target) {
                l++;
            } else {
                return [l+1, r+1];
            }
        }
        return [0, 0];
    };

    console.log(twoSum([2,7,11,15], 9));

})();
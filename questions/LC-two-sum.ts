// The classic Two Sum problem on LeetCode
(() => {

    function twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            const contains = target - nums[i];
            if(map.has(contains)) {
                return [map.get(contains) as number, i];
            }
            map.set(nums[i], i);
        }
        return [];        
    }

    console.log(twoSum([2,7,11,15], 9)); // [0, 1]
    console.log(twoSum([3,2,4], 6)); // [1, 2]
    console.log(twoSum([3,3], 6)); // [0, 1]

})();


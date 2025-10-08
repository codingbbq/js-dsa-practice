// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
(() => {
    function minimumOperations(nums: number[]): number {
        const unique = new Set<number>();

        for(const n of nums) {
            if(n != 0) {
                unique.add(n);
            }
        }

        return unique.size;
    };

    console.log(minimumOperations([1,5,0,3,5])) // 3
    console.log(minimumOperations([0])) // 0;
})();